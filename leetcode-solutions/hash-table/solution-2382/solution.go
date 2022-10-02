package solution2382

import (
	"math"
)

type Node struct {
	left  int
	right int
}

func maximumSegmentSum(nums []int, removeQueries []int) (res []int64) {
	preSum := make(map[int]int64)
	nums64 := []int64{}
	for _, v := range nums {
		nums64 = append(nums64, int64(v))
	}
	preSum[0] = nums64[0]
	nodeMap := make(map[int]Node)
	for i := 1; i < len(nums64); i++ {
		preSum[i] = nums64[i] + preSum[i-1]
	}
	res = append(res, 0)
	if len(nums) == 1 {
		return
	}
	taIdx := removeQueries[len(removeQueries)-1]
	if len(removeQueries) > 1 {
		res = append(res, nums64[taIdx])
	}
	nodeMap[taIdx] = Node{taIdx, taIdx}
	curMax := res[1]
	for i := len(removeQueries) - 2; i >= 1; i-- {
		idx := removeQueries[i]
		var val int64
		p, ok1 := nodeMap[idx-1]
		q, ok2 := nodeMap[idx+1]
		if ok1 && ok2 {
			val = preSum[q.right] - preSum[p.left] + nums64[p.left]
			node := Node{p.left, q.right}
			nodeMap[p.left], nodeMap[q.right] = node, node
		} else if ok1 {
			val = preSum[idx] - preSum[p.left] + nums64[p.left]
			node := Node{p.left, idx}
			nodeMap[p.left], nodeMap[idx] = node, node
		} else if ok2 {
			val = preSum[q.right] - preSum[idx] + nums64[idx]
			node := Node{idx, q.right}
			nodeMap[q.right], nodeMap[idx] = node, node
		} else {
			val = nums64[idx]
			nodeMap[idx] = Node{idx, idx}
		}
		curMax = int64(math.Max(float64(curMax), float64(val)))
		res = append(res, curMax)
	}
	for i, j := 0, len(res)-1; i < j; i, j = i+1, j-1 {
		res[i], res[j] = res[j], res[i]
	}
	return
}
