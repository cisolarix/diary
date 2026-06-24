package com.diary.server.web.dto;

public record LoginResponse(
        String token,
        String openId,
        Long userId,
        boolean devMode
) {
}
