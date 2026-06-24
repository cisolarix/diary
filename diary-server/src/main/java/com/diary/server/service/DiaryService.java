package com.diary.server.service;

import com.diary.server.domain.Diary;
import com.diary.server.domain.User;
import com.diary.server.repository.DiaryRepository;
import com.diary.server.repository.UserRepository;
import com.diary.server.web.dto.DiaryRequest;
import com.diary.server.web.dto.DiaryResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Service
public class DiaryService {

    private final DiaryRepository diaryRepository;
    private final UserRepository userRepository;

    public DiaryService(DiaryRepository diaryRepository, UserRepository userRepository) {
        this.diaryRepository = diaryRepository;
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public List<DiaryResponse> listDiaries(Long userId, Instant since) {
        User user = requireUser(userId);
        return diaryRepository.findActiveByUserSince(user, since).stream()
                .map(DiaryResponse::from)
                .toList();
    }

    @Transactional(readOnly = true)
    public DiaryResponse getDiary(Long userId, LocalDate date) {
        User user = requireUser(userId);
        Diary diary = diaryRepository.findByUserAndDiaryDateAndDeletedAtIsNull(user, date)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Diary not found"));
        return DiaryResponse.from(diary);
    }

    @Transactional
    public DiaryResponse upsertDiary(Long userId, LocalDate date, DiaryRequest request) {
        User user = requireUser(userId);
        Diary diary = diaryRepository.findByUserAndDiaryDateAndDeletedAtIsNull(user, date)
                .orElseGet(() -> {
                    Diary created = new Diary();
                    created.setUser(user);
                    created.setDiaryDate(date);
                    return created;
                });

        diary.setContent(request.content() == null ? "" : request.content());
        diary.setLocation(request.location());
        diary.setLatitude(request.latitude());
        diary.setLongitude(request.longitude());
        diary.setDeletedAt(null);

        return DiaryResponse.from(diaryRepository.save(diary));
    }

    @Transactional
    public void deleteDiary(Long userId, LocalDate date) {
        User user = requireUser(userId);
        Diary diary = diaryRepository.findByUserAndDiaryDateAndDeletedAtIsNull(user, date)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Diary not found"));
        diary.setDeletedAt(Instant.now());
        diaryRepository.save(diary);
    }

    private User requireUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"));
    }
}
