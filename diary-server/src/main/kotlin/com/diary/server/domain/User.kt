package com.diary.server.domain

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.PrePersist
import jakarta.persistence.PreUpdate
import jakarta.persistence.Table
import java.time.Instant

@Entity
@Table(name = "users")
class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id: Long? = null

  @Column(name = "open_id", nullable = false, unique = true, length = 64)
  var openId: String? = null

  @Column(name = "nick_name", length = 64)
  var nickName: String? = null

  @Column(name = "avatar_url", length = 512)
  var avatarUrl: String? = null

  @Column(name = "created_at", nullable = false)
  var createdAt: Instant? = null
    private set

  @Column(name = "updated_at", nullable = false)
  var updatedAt: Instant? = null
    private set

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
