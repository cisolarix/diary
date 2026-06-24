package com.diary.server.web.dto

data class ApiErrorResponse(
  val message: String,
  val errors: Map<String, String>? = null
)
