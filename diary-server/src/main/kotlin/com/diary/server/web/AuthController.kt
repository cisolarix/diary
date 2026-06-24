package com.diary.server.web

import com.diary.server.service.AuthService
import com.diary.server.web.dto.LoginRequest
import com.diary.server.web.dto.LoginResponse
import jakarta.validation.Valid
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/auth")
class AuthController(
  private val authService: AuthService
) {
  @PostMapping("/login")
  fun login(@Valid @RequestBody request: LoginRequest): LoginResponse =
    authService.login(request.code)
}
