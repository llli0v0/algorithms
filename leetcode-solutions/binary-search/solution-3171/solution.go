package solution3171

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}

func minimumDifference(nums []int, k int) int {
	res := abs(k - nums[0])

	preSum := make([][31]int, len(nums))

	for i := 0; i < 31; i++ {
		if (1<<i)&nums[0] != 0 {
			preSum[0][i]++
		}
	}

	for i := 1; i < len(nums); i++ {
		for j := 0; j < 31; j++ {
			if (1<<j)&nums[i] != 0 {
				preSum[i][j]++
			}
			preSum[i][j] += preSum[i-1][j]
		}
		res = min(res, abs(k-nums[i]))
		l, r := 0, i
		for l < r {
			m := (l + r) / 2
			val := 0
			if m == 0 {
				for j := 0; j < 31; j++ {
					if preSum[i][j] > 0 {
						val += 1 << j
					}
				}
			} else {
				for j := 0; j < 31; j++ {
					if preSum[i][j]-preSum[m-1][j] > 0 {
						val += 1 << j
					}
				}
			}
			res = min(res, abs(k-val))
			if val-k > 0 {
				l = m + 1
			} else {
				r = m
			}
		}
	}
	return res
}
