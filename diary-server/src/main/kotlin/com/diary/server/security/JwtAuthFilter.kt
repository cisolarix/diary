package com.diary.server.security

import com.diary.server.service.JwtService
import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.HttpHeaders
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter

@Component
class JwtAuthFilter(
    private val jwtService: JwtService
) : OncePerRequestFilter() {

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val header = request.getHeader(HttpHeaders.AUTHORIZATION)
        if (header != null && header.startsWith("Bearer ")) {
            val token = header.substring(7)
            try {
                val userId = jwtService.getUserId(token)
                val openId = jwtService.parseToken(token)["openId", String::class.java]
                val authentication = UsernamePasswordAuthenticationToken(
                    AuthUser(userId, openId), null, listOf()
                )
                SecurityContextHolder.getContext().authentication = authentication
            } catch (_: Exception) {
                SecurityContextHolder.clearContext()
            }
        }

        filterChain.doFilter(request, response)
    }
}
