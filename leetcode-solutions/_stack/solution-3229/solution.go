package solution3229

func minimumOperations(nums []int, target []int) (res int64) {
	diff := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		diff[i] = target[i] - nums[i]
	}
	stack := []int{diff[0]}
	for i := 1; i < len(diff); i++ {
		d := diff[i]
		if stack[len(stack)-1] > 0 {
			if d <= 0 {
				res += int64(stack[len(stack)-1])
				stack = []int{d}
			} else {
				m := 0
				for len(stack) > 0 && d < stack[len(stack)-1] {
					m = max(m, stack[len(stack)-1])
					stack = stack[:len(stack)-1]
				}
				if m > 0 {
					res += int64(m - d)
				}
				stack = append(stack, d)
			}
		} else if stack[len(stack)-1] < 0 {
			if d >= 0 {
				res += int64(-stack[len(stack)-1])
				stack = []int{d}
			} else {
				m := 0
				for len(stack) > 0 && d > stack[len(stack)-1] {
					m = min(m, stack[len(stack)-1])
					stack = stack[:len(stack)-1]
				}
				if m < 0 {
					res += int64(d - m)
				}
				stack = append(stack, d)
			}
		} else {
			stack = []int{d}
		}
	}
	if len(stack) > 0 {
		if stack[len(stack)-1] >= 0 {
			res += int64(stack[len(stack)-1])
		} else {
			res += int64(-stack[len(stack)-1])
		}
	}
	return
}
