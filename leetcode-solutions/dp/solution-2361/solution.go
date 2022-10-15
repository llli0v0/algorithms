package solution2361

import "math"

func minimumCosts(regular []int, express []int, expressCost int) (res []int64) {
    dp := make([][2]int, len(regular))
    dp[0] = [2]int{regular[0], express[0] + expressCost}
    res = append(res, int64(math.Min(float64(dp[0][0]), float64(dp[0][1]))))
    for i := 1; i < len(regular); i++ {
        dp[i][0] = int(math.Min(float64(dp[i-1][0]), float64(dp[i-1][1]))) + regular[i]
        dp[i][1] = int(math.Min(float64(dp[i-1][0]+expressCost), float64(dp[i-1][1]))) + express[i]
        res = append(res, int64(math.Min(float64(dp[i][0]), float64(dp[i][1]))))
    }
    return
}
