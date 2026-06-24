package com.diary.server

import com.diary.server.config.JwtProperties
import com.diary.server.config.WeChatProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableConfigurationProperties(JwtProperties::class, WeChatProperties::class)
class DiaryServerApplication

fun main(args: Array<String>) {
  runApplication<DiaryServerApplication>(*args)
}
