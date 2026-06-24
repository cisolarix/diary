package com.diary.server.web.dto;

import com.diary.server.domain.Diary;

import java.time.Instant;
import java.time.LocalDate;

public record DiaryResponse(
        Long id,
        LocalDate date,
        String content,
        String location,
        Double latitude,
        Double longitude,
        Instant createdAt,
        Instant updatedAt
) {
    public static DiaryResponse from(Diary diary) {
        return new DiaryResponse(
                diary.getId(),
                diary.getDiaryDate(),
                diary.getContent(),
                diary.getLocation(),
                diary.getLatitude(),
                diary.getLongitude(),
                diary.getCreatedAt(),
                diary.getUpdatedAt()
        );
    }
}
