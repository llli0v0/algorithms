package solution2400

type Key struct {
    end int
    k   int
}

func numberOfWays(startPos int, endPos int, k int) int {
    dp := make(map[Key]int)
    mod := 1000000007
    var helper func(endPos int, k int) int
    helper = func(endPos int, k int) int {
        if startPos == endPos && k == 0 {
            return 1
        } else if abs(startPos, endPos) > k {
            return 0
        }
        key := Key{endPos, k}
        if v, ok := dp[key]; ok {
            return v
        }
        dp[key] = (helper(endPos+1, k-1) + helper(endPos-1, k-1)) % mod
        return dp[key]
    }
    return helper(endPos, k)
}

func abs(a int, b int) int {
    if a-b >= 0 {
        return a - b
    }
    return b - a
}
