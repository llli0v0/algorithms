package solution1788

import "math"

func maximumBeauty(flowers []int) (res int) {
    res = int(math.Inf(-1))
    flowerMap := make(map[int]int)
    preSum := make(map[int]int)
    preSum[-1] = 0
    for i, v := range flowers {
        if _, ok := flowerMap[v]; !ok {
            flowerMap[v] = i
        }
        if v > 0 {
            preSum[i] = preSum[i-1] + v
        } else {
            preSum[i] = preSum[i-1]
        }
        if idx, ok1 := flowerMap[v]; ok1 {
            if idx != i {
                res = int(math.Max(float64(preSum[i-1]-preSum[idx]+2*v), float64(res)))
            }
        }
    }
    return
}
