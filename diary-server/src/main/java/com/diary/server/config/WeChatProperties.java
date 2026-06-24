package com.diary.server.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "diary.wechat")
public record WeChatProperties(
        String appId,
        String appSecret,
        boolean devMode
) {
    public boolean isConfigured() {
        return appId != null && !appId.isBlank()
                && appSecret != null && !appSecret.isBlank();
    }
}
