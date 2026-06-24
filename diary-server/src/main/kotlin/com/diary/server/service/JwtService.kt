package com.diary.server.service

import com.diary.server.config.JwtProperties
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import org.springframework.stereotype.Service
import java.nio.charset.StandardCharsets
import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.Date
import javax.crypto.SecretKey

@Service
class JwtService(properties: JwtProperties) {

    private val secretKey: SecretKey = Keys.hmacShaKeyFor(properties.secret.toByteArray(StandardCharsets.UTF_8))
    private val expirationHours: Long = properties.expirationHours

    fun generateToken(userId: Long?, openId: String?): String {
        val now = Instant.now()
        val expiry = now.plus(expirationHours, ChronoUnit.HOURS)

        return Jwts.builder()
            .subject(userId.toString())
            .claim("openId", openId)
            .issuedAt(Date.from(now))
            .expiration(Date.from(expiry))
            .signWith(secretKey)
            .compact()
    }

    fun parseToken(token: String) =
        Jwts.parser()
            .verifyWith(secretKey)
            .build()
            .parseSignedClaims(token)
            .payload

    fun getUserId(token: String): Long = parseToken(token).subject.toLong()
}
