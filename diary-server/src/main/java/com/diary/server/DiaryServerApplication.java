package com.diary.server;

import com.diary.server.config.JwtProperties;
import com.diary.server.config.WeChatProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({JwtProperties.class, WeChatProperties.class})
public class DiaryServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiaryServerApplication.class, args);
    }
}
