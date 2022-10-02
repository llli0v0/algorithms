package solution2420

func goodIndices(nums []int, k int) (res []int) {
	ilen, dlen := 1, 1
	imap, dmap := make(map[int]bool), make(map[int]bool)
	if k == 1 {
		imap[0] = true
		dmap[0] = true
	}
	for i := 1; i < len(nums); i++ {
		v := nums[i]
		pre := nums[i-1]
		if v < pre {
			ilen++
			dlen = 1
		} else if v > pre {
			dlen++
			ilen = 1
		} else {
			ilen++
			dlen++
		}
		if ilen >= k {
			imap[i] = true
		}
		if dlen >= k {
			dmap[i-k+1] = true
		}
	}
	for i := k; i < len(nums)-k; i++ {
		if imap[i-1] && dmap[i+1] {
			res = append(res, i)
		}
	}
	return
}
