package com.diary.server.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "diary.jwt")
public record JwtProperties(
        String secret,
        long expirationHours
) {
}
