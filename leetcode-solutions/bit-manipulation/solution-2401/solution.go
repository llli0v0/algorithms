package solution2401

import "math"

func longestNiceSubarray(nums []int) (res int) {
    arr := []int{}
    sum := 0
    for _, v := range nums {
        for (sum & v) != 0 {
            sum -= arr[0]
            arr = arr[1:]
        }
        arr = append(arr, v)
        sum += v
        res = int(math.Max(float64(res), float64(len(arr))))
    }
    return
}
