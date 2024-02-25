package solution3040

var ns []int
var dp [][]int

func maxOperations(nums []int) (res int) {
	ln := len(nums)
	ns = nums
	dp = make([][]int, ln)
	for i := range dp {
		dp[i] = make([]int, ln)
		for j := range dp[i] {
			dp[i][j] = -1
		}
	}
	res = max(res, 1+solve(2, ln-1, nums[0]+nums[1]))
	res = max(res, 1+solve(1, ln-2, nums[0]+nums[ln-1]))
	res = max(res, 1+solve(0, ln-3, nums[ln-1]+nums[ln-2]))
	return
}

func solve(i int, j int, sum int) int {
	if i >= j {
		return 0
	}
	p := &dp[i][j]
	if *p != -1 {
		return *p
	}
	*p = 0
	if ns[i]+ns[i+1] == sum {
		*p = max(*p, 1+solve(i+2, j, sum))
	}
	if ns[i]+ns[j] == sum {
		*p = max(*p, 1+solve(i+1, j-1, sum))
	}
	if ns[j-1]+ns[j] == sum {
		*p = max(*p, 1+solve(i, j-2, sum))
	}
	return *p
}
