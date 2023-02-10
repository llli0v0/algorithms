package solution2554

func maxCount(banned []int, n int, maxSum int) (res int) {
    bannedMap := make(map[int]bool)
    for i := 0; i < len(banned); i++ {
        bannedMap[banned[i]] = true
    }
    sum := 0
    for i := 1; i <= n; i++ {
        if _, ok := bannedMap[i]; ok {
            continue
        }
        if sum+i <= maxSum {
            res++
            sum += i
        } else {
            break
        }
    }
    return
}
