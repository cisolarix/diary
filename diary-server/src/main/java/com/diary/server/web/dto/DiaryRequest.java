package com.diary.server.web.dto;

import jakarta.validation.constraints.Size;

public record DiaryRequest(
        @Size(max = 5000) String content,
        @Size(max = 256) String location,
        Double latitude,
        Double longitude
) {
}
