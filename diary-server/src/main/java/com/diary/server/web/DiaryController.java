package com.diary.server.web;

import com.diary.server.security.AuthUser;
import com.diary.server.service.DiaryService;
import com.diary.server.web.dto.DiaryRequest;
import com.diary.server.web.dto.DiaryResponse;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/diaries")
public class DiaryController {

    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping
    public List<DiaryResponse> list(
            @AuthenticationPrincipal AuthUser user,
            @RequestParam(required = false) Instant since
    ) {
        return diaryService.listDiaries(user.userId(), since);
    }

    @GetMapping("/{date}")
    public DiaryResponse get(
            @AuthenticationPrincipal AuthUser user,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        return diaryService.getDiary(user.userId(), date);
    }

    @PutMapping("/{date}")
    public DiaryResponse upsert(
            @AuthenticationPrincipal AuthUser user,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @Valid @RequestBody DiaryRequest request
    ) {
        return diaryService.upsertDiary(user.userId(), date, request);
    }

    @DeleteMapping("/{date}")
    public void delete(
            @AuthenticationPrincipal AuthUser user,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        diaryService.deleteDiary(user.userId(), date);
    }
}
