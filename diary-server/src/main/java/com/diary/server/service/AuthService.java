package com.diary.server.service;

import com.diary.server.config.WeChatProperties;
import com.diary.server.domain.User;
import com.diary.server.repository.UserRepository;
import com.diary.server.web.dto.LoginResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClient;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {

    private static final String DEV_CODE = "dev-login";

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final WeChatProperties weChatProperties;
    private final RestClient restClient;

    public AuthService(
            UserRepository userRepository,
            JwtService jwtService,
            WeChatProperties weChatProperties
    ) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.weChatProperties = weChatProperties;
        this.restClient = RestClient.create();
    }

    @Transactional
    public LoginResponse login(String code) {
        SessionInfo session = resolveSession(code);
        User user = userRepository.findByOpenId(session.openId())
                .orElseGet(() -> {
                    User created = new User();
                    created.setOpenId(session.openId());
                    return userRepository.save(created);
                });

        String token = jwtService.generateToken(user.getId(), user.getOpenId());
        return new LoginResponse(token, user.getOpenId(), user.getId(), weChatProperties.devMode() && !weChatProperties.isConfigured());
    }

    private SessionInfo resolveSession(String code) {
        if (weChatProperties.isConfigured()) {
            return exchangeWeChatCode(code);
        }
        if (weChatProperties.devMode()) {
            return devSession(code);
        }
        throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, "WeChat credentials are not configured");
    }

    private SessionInfo devSession(String code) {
        String openId = (code == null || code.isBlank() || DEV_CODE.equals(code))
                ? "dev-openid-local"
                : "dev-" + code;
        return new SessionInfo(openId, "dev-session-key");
    }

    private SessionInfo exchangeWeChatCode(String code) {
        if (code == null || code.isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "code is required");
        }

        WeChatSessionResponse response = restClient.get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .host("api.weixin.qq.com")
                        .path("/sns/jscode2session")
                        .queryParam("appid", weChatProperties.appId())
                        .queryParam("secret", weChatProperties.appSecret())
                        .queryParam("js_code", code)
                        .queryParam("grant_type", "authorization_code")
                        .build())
                .retrieve()
                .body(WeChatSessionResponse.class);

        if (response == null || response.openid() == null || response.openid().isBlank()) {
            String message = response != null && response.errmsg() != null ? response.errmsg() : "WeChat login failed";
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, message);
        }

        return new SessionInfo(response.openid(), response.sessionKey());
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    private record WeChatSessionResponse(
            String openid,
            String sessionKey,
            String errmsg,
            Integer errcode
    ) {
    }

    private record SessionInfo(String openId, String sessionKey) {
    }
}
