package com.diary.server.repository;

import com.diary.server.domain.Diary;
import com.diary.server.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface DiaryRepository extends JpaRepository<Diary, Long> {

    Optional<Diary> findByUserAndDiaryDateAndDeletedAtIsNull(User user, LocalDate diaryDate);

    @Query("""
            SELECT d FROM Diary d
            WHERE d.user = :user
              AND d.deletedAt IS NULL
              AND (:since IS NULL OR d.updatedAt > :since)
            ORDER BY d.diaryDate DESC
            """)
    List<Diary> findActiveByUserSince(@Param("user") User user, @Param("since") Instant since);
}
