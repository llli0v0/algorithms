package solution1692

import (
    "math"
)

type Key struct {
    n int
    k int
}

func waysToDistribute(n int, k int) int {
    mod := int(math.Pow10(9) + 7)
    dp := make(map[Key]int)
    var helper func(int, int) int
    helper = func(n int, k int) int {
        if n == k {
            return 1
        } else if n == 0 || k == 0 {
            return 0
        }
        key := Key{n, k}
        if v, ok := dp[key]; ok {
            return v
        }
        dp[key] = (k*helper(n-1, k) + helper(n-1, k-1)) % mod
        return dp[key]
    }
    return helper(n, k)
}
