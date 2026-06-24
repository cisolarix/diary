package com.diary.server.service

import com.diary.server.domain.Diary
import com.diary.server.domain.User
import com.diary.server.repository.DiaryRepository
import com.diary.server.repository.UserRepository
import com.diary.server.web.dto.DiaryRequest
import com.diary.server.web.dto.DiaryResponse
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.server.ResponseStatusException
import java.time.Instant
import java.time.LocalDate

@Service
class DiaryService(
    private val diaryRepository: DiaryRepository,
    private val userRepository: UserRepository
) {
    @Transactional(readOnly = true)
    fun listDiaries(userId: Long, since: Instant?): List<DiaryResponse> {
        val user = requireUser(userId)
        return diaryRepository.findActiveByUserSince(user, since)
            .map { DiaryResponse.from(it) }
    }

    @Transactional(readOnly = true)
    fun getDiary(userId: Long, date: LocalDate): DiaryResponse {
        val user = requireUser(userId)
        val diary = diaryRepository.findByUserAndDiaryDateAndDeletedAtIsNull(user, date)
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Diary not found")
        return DiaryResponse.from(diary)
    }

    @Transactional
    fun upsertDiary(userId: Long, date: LocalDate, request: DiaryRequest): DiaryResponse {
        val user = requireUser(userId)
        val diary = diaryRepository.findByUserAndDiaryDateAndDeletedAtIsNull(user, date)
            ?: Diary().apply {
                this.user = user
                diaryDate = date
            }

        diary.content = request.content ?: ""
        diary.location = request.location
        diary.latitude = request.latitude
        diary.longitude = request.longitude
        diary.deletedAt = null

        return DiaryResponse.from(diaryRepository.save(diary))
    }

    @Transactional
    fun deleteDiary(userId: Long, date: LocalDate) {
        val user = requireUser(userId)
        val diary = diaryRepository.findByUserAndDiaryDateAndDeletedAtIsNull(user, date)
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Diary not found")
        diary.deletedAt = Instant.now()
        diaryRepository.save(diary)
    }

    private fun requireUser(userId: Long): User =
        userRepository.findById(userId).orElseThrow {
            ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found")
        }
}
