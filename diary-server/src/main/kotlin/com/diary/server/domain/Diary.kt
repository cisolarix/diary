package com.diary.server.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.PrePersist
import jakarta.persistence.PreUpdate
import jakarta.persistence.Table
import java.time.Instant
import java.time.LocalDate

@Entity
@Table(name = "diaries")
class Diary {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id: Long? = null

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_id", nullable = false)
  var user: User? = null

  @Column(name = "diary_date", nullable = false)
  var diaryDate: LocalDate? = null

  @Column(nullable = false, columnDefinition = "text")
  var content: String = ""

  @Column(length = 256)
  var location: String? = null

  var latitude: Double? = null

  var longitude: Double? = null

  @Column(name = "created_at", nullable = false)
  var createdAt: Instant? = null
    private set

  @Column(name = "updated_at", nullable = false)
  var updatedAt: Instant? = null
    private set

  @Column(name = "deleted_at")
  var deletedAt: Instant? = null

  val isDeleted: Boolean get() = deletedAt != null

  @PrePersist
  fun onCreate() {
    val now = Instant.now()
    createdAt = now
    updatedAt = now
  }

  @PreUpdate
  fun onUpdate() {
    updatedAt = Instant.now()
  }
}
