package com.diary.server.repository

import com.diary.server.domain.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long> {
  fun findByOpenId(openId: String): User?
}
