package solution2563

import (
    "math"
    "sort"
)

func countFairPairs(nums []int, lower int, upper int) int64 {
    res := 0
    sort.Ints(nums)
    for i := 1; i < len(nums); i++ {
        nl := lower - nums[i]
        nu := upper - nums[i]
        if nums[0] > nu || nums[i-1] < nl {
            continue
        }
        l, r := 0, i-1
        for l < r {
            m := int(math.Floor(float64(l+r) / 2))
            if nums[m] >= nl {
                r = m
            } else {
                l = m + 1
            }
        }
        a := l
        l, r = 0, i-1
        for l < r {
            m := int(math.Ceil(float64(l+r) / 2))
            if nums[m] <= nu {
                l = m
            } else {
                r = m - 1
            }
        }
        res += l - a + 1
    }
    return int64(res)
}
