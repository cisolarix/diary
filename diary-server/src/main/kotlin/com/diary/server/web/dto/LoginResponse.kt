package com.diary.server.web.dto

data class LoginResponse(
    val token: String,
    val openId: String,
    val userId: Long?,
    val devMode: Boolean
)
