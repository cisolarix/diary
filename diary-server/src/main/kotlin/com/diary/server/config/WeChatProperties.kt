package com.diary.server.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "diary.wechat")
data class WeChatProperties(
    val appId: String?,
    val appSecret: String?,
    val devMode: Boolean
) {
    val isConfigured: Boolean
        get() = !appId.isNullOrBlank() && !appSecret.isNullOrBlank()
}
