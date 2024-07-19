package solution3209

func countSubarrays(nums []int, k int) (res int64) {
	prefix := make([][31]int, len(nums))
	for i := 0; i <= 30; i++ {
		if (nums[0] & (1 << i)) != 0 {
			prefix[0][i]++
		}
	}
	if nums[0] == k {
		res++
	}
	for i := 1; i < len(nums); i++ {
		impossible := false
		for j := 0; j <= 30; j++ {
			if (nums[i] & (1 << j)) != 0 {
				prefix[i][j]++
			}
			prefix[i][j] += prefix[i-1][j]
			if ((1<<j)&k) == 0 && prefix[i][j] == i+1 {
				impossible = true
			} else if ((1<<j)&k) == (1<<j) && prefix[i][j] == 0 {
				impossible = true
			} else if (nums[i] & k) != k {
				impossible = true
			}
		}
		if impossible {
			continue
		}
		l, r := 0, i
		for l < r {
			m := (l + r + 1) / 2
			prefixi := prefix[i]
			var prefixm [31]int
			if m > 0 {
				prefixm = prefix[m-1]
			}
			val := 0
			length := i - m + 1
			for j := 0; j <= 30; j++ {
				if prefixi[j]-prefixm[j] == length {
					val += 1 << j
				}
			}
			if val > k {
				r = m - 1
			} else {
				l = m
			}
		}
		l1, r1 := 0, i
		for l1 < r1 {
			m := (l1 + r1) / 2
			prefixi := prefix[i]
			var prefixm [31]int
			if m > 0 {
				prefixm = prefix[m-1]
			}
			val := 0
			length := i - m + 1
			for j := 0; j <= 30; j++ {
				if prefixi[j]-prefixm[j] == length {
					val += 1 << j
				}
			}
			if val >= k {
				r1 = m
			} else {
				l1 = m + 1
			}
		}
		res += int64(l - l1 + 1)
	}
	return
}
