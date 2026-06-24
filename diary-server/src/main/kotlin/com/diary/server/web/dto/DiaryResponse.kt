package com.diary.server.web.dto

import com.diary.server.domain.Diary
import java.time.Instant
import java.time.LocalDate

data class DiaryResponse(
    val id: Long?,
    val date: LocalDate?,
    val content: String,
    val location: String?,
    val latitude: Double?,
    val longitude: Double?,
    val createdAt: Instant?,
    val updatedAt: Instant?
) {
    companion object {
        fun from(diary: Diary): DiaryResponse = DiaryResponse(
            id = diary.id,
            date = diary.diaryDate,
            content = diary.content,
            location = diary.location,
            latitude = diary.latitude,
            longitude = diary.longitude,
            createdAt = diary.createdAt,
            updatedAt = diary.updatedAt
        )
    }
}
