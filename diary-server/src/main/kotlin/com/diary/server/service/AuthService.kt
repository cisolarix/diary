package com.diary.server.service

import com.diary.server.config.WeChatProperties
import com.diary.server.domain.User
import com.diary.server.repository.UserRepository
import com.diary.server.web.dto.LoginResponse
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.client.RestClient
import org.springframework.web.server.ResponseStatusException

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val jwtService: JwtService,
    private val weChatProperties: WeChatProperties
) {
    private val restClient: RestClient = RestClient.create()

    @Transactional
    fun login(code: String?): LoginResponse {
        val session = resolveSession(code)
        val user = userRepository.findByOpenId(session.openId)
            ?: userRepository.save(User().apply { openId = session.openId })

        val token = jwtService.generateToken(user.id, user.openId)
        return LoginResponse(
            token = token,
            openId = user.openId!!,
            userId = user.id,
            devMode = weChatProperties.devMode && !weChatProperties.isConfigured
        )
    }

    private fun resolveSession(code: String?): SessionInfo {
        if (weChatProperties.isConfigured) {
            return exchangeWeChatCode(code)
        }
        if (weChatProperties.devMode) {
            return devSession(code)
        }
        throw ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, "WeChat credentials are not configured")
    }

    private fun devSession(code: String?): SessionInfo {
        val openId = if (code.isNullOrBlank() || code == DEV_CODE) "dev-openid-local" else "dev-$code"
        return SessionInfo(openId, "dev-session-key")
    }

    private fun exchangeWeChatCode(code: String?): SessionInfo {
        if (code.isNullOrBlank()) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "code is required")
        }

        val response = restClient.get()
            .uri { uriBuilder ->
                uriBuilder
                    .scheme("https")
                    .host("api.weixin.qq.com")
                    .path("/sns/jscode2session")
                    .queryParam("appid", weChatProperties.appId)
                    .queryParam("secret", weChatProperties.appSecret)
                    .queryParam("js_code", code)
                    .queryParam("grant_type", "authorization_code")
                    .build()
            }
            .retrieve()
            .body(WeChatSessionResponse::class.java)

        if (response == null || response.openid.isNullOrBlank()) {
            val message = response?.errmsg ?: "WeChat login failed"
            throw ResponseStatusException(HttpStatus.BAD_GATEWAY, message)
        }

        return SessionInfo(response.openid, response.sessionKey)
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    private data class WeChatSessionResponse(
        val openid: String?,
        val sessionKey: String?,
        val errmsg: String?,
        val errcode: Int?
    )

    private data class SessionInfo(val openId: String, val sessionKey: String?)

    companion object {
        private const val DEV_CODE = "dev-login"
    }
}
