package com.diary.server

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class DiaryServerApplicationTests {

    @Test
    fun mainClassPackageIsCorrect() {
        assertEquals("com.diary.server", DiaryServerApplication::class.java.packageName)
    }
}
