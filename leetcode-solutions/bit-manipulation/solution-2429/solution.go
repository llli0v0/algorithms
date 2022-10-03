package solution2429

import (
    "math/bits"
)

func minimizeXor(num1 int, num2 int) (res int) {
    count := bits.OnesCount(uint(num2))
    for i := 32; i >= 0 && count > 0; i-- {
        if (num1 & (1 << i)) == (1 << i) {
            res += 1 << i
            count--
        }
    }
    for i := 0; i <= 32 && count > 0; i++ {
        if (num1 & (1 << i)) == 0 {
            res += 1 << i
            count--
        }
    }
    return
}
