package com.diary.server.repository

import com.diary.server.domain.Diary
import com.diary.server.domain.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.time.Instant
import java.time.LocalDate

interface DiaryRepository : JpaRepository<Diary, Long> {

    fun findByUserAndDiaryDateAndDeletedAtIsNull(user: User, diaryDate: LocalDate): Diary?

    @Query(
        """
        SELECT d FROM Diary d
        WHERE d.user = :user
          AND d.deletedAt IS NULL
          AND (:since IS NULL OR d.updatedAt > :since)
        ORDER BY d.diaryDate DESC
        """
    )
    fun findActiveByUserSince(@Param("user") user: User, @Param("since") since: Instant?): List<Diary>
}
