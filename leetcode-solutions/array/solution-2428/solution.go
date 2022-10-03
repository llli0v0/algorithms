package solution2428

import "math"

func maxSum(grid [][]int) (res int) {
    for i, v := range grid {
        for j := range v {
            if i >= 2 && j >= 2 {
                var val int
                for m := i; m > i-3; m-- {
                    for n := j; n > j-3; n-- {
                        val += grid[m][n]
                    }
                }
                val -= grid[i-1][j-2]
                val -= grid[i-1][j]
                res = int(math.Max(float64(res), float64(val)))
            }
        }
    }
    return
}
