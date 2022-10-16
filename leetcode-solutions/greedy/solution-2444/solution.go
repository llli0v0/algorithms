package solution2444

import "math"

func countSubarrays(nums []int, minK int, maxK int) (res int64) {
    p, q, s := 1000000, 1000000, 1000000
    for i, v := range nums {
        if v > maxK || v < minK {
            p, q, s = 1000000, 1000000, 1000000
        } else {
            if s == 1000000 {
                s = i
            }
            if v == minK {
                p = i
            }
            if v == maxK {
                q = i
            }
            if p != 1000000 && q != 1000000 {
                res += int64(math.Min(float64(p), float64(q))) - int64(s) + 1
            }
        }
    }
    return
}
