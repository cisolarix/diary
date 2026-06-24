package com.diary.server.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "diary.jwt")
data class JwtProperties(
  val secret: String,
  val expirationHours: Long
)
