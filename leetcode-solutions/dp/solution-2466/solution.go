package solution2466

import "math"

func countGoodStrings(low int, high int, zero int, one int) (res int) {
    dp := make([]int, high)
    mod := int(math.Pow(10, 9) + 7)
    for i := 1; i <= high; i++ {
        z := i - zero
        if z == 0 {
            dp[i-1] += 1
        } else if z > 0 {
            dp[i-1] += dp[z-1]
        }
        o := i - one
        if o == 0 {
            dp[i-1] += 1
        } else if o > 0 {
            dp[i-1] += dp[o-1]
        }
        dp[i-1] %= mod
        if i >= low {
            res += dp[i-1]
            res %= mod
        }
    }
    return
}
