package com.diary.server.web.dto

import jakarta.validation.constraints.NotBlank

data class LoginRequest(
  @field:NotBlank val code: String
)
