package solution1231

import (
    "math"
)

func maximizeSweetness(sweetness []int, k int) (res int) {
    l := 0
    r := int(math.Pow10(9))
    for l < r {
        m := int(math.Ceil(float64(l+r) / 2))
        count := 0
        cur := 0
        min := math.Inf(1)
        for _, v := range sweetness {
            cur += v
            if cur >= m {
                count++
                min = math.Min(min, float64(cur))
                cur = 0
            }
        }
        if count >= k+1 {
            l = m
            res = int(min)
        } else {
            r = m - 1
        }
    }
    return
}
