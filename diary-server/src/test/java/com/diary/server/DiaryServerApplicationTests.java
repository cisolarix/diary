package com.diary.server;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DiaryServerApplicationTests {

    @Test
    void mainClassPackageIsCorrect() {
        assertEquals("com.diary.server", DiaryServerApplication.class.getPackageName());
    }
}
