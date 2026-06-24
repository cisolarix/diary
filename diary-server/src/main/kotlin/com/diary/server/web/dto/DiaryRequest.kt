package com.diary.server.web.dto

import jakarta.validation.constraints.Size

data class DiaryRequest(
  @field:Size(max = 5000) val content: String?,
  @field:Size(max = 256) val location: String?,
  val latitude: Double?,
  val longitude: Double?
)
