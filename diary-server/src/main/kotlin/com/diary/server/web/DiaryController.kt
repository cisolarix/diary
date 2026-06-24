package com.diary.server.web

import com.diary.server.security.AuthUser
import com.diary.server.service.DiaryService
import com.diary.server.web.dto.DiaryRequest
import com.diary.server.web.dto.DiaryResponse
import jakarta.validation.Valid
import org.springframework.format.annotation.DateTimeFormat
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.Instant
import java.time.LocalDate

@RestController
@RequestMapping("/api/diaries")
class DiaryController(
    private val diaryService: DiaryService
) {
    @GetMapping
    fun list(
        @AuthenticationPrincipal user: AuthUser,
        @RequestParam(required = false) since: Instant?
    ): List<DiaryResponse> = diaryService.listDiaries(user.userId, since)

    @GetMapping("/{date}")
    fun get(
        @AuthenticationPrincipal user: AuthUser,
        @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) date: LocalDate
    ): DiaryResponse = diaryService.getDiary(user.userId, date)

    @PutMapping("/{date}")
    fun upsert(
        @AuthenticationPrincipal user: AuthUser,
        @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) date: LocalDate,
        @Valid @RequestBody request: DiaryRequest
    ): DiaryResponse = diaryService.upsertDiary(user.userId, date, request)

    @DeleteMapping("/{date}")
    fun delete(
        @AuthenticationPrincipal user: AuthUser,
        @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) date: LocalDate
    ) = diaryService.deleteDiary(user.userId, date)
}
