package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class FailingTest {
    @Test
    void fails() {
        // intentional failing test
        assertEquals(5, 2 + 2);
    }
}
