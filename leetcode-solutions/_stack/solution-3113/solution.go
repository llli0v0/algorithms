package solution3113

func numberOfSubarrays(nums []int) (res int64) {
	var stack []int
	stack = append(stack, nums[0])
	res++
	for i, length := 1, len(nums); i < length; i++ {
		n := nums[i]
		for len(stack) > 0 && n > stack[len(stack)-1] {
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, n)
		l, r := 0, len(stack)
		for l < r {
			m := (l + r) / 2
			if stack[m] != n {
				l = m + 1
			} else {
				r = m
			}
		}
		res += int64(len(stack) - l)
	}
	return
}
