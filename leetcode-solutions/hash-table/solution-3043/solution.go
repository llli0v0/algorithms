package solution3043

import "strconv"

func longestCommonPrefix(arr1 []int, arr2 []int) (res int) {
	mp := map[string]bool{}
	for _, n := range arr1 {
		s := strconv.Itoa(n)
		for i := 1; i <= len(s); i++ {
			mp[s[:i]] = true
		}
	}
	for _, n := range arr2 {
		s := strconv.Itoa(n)
		for i := 1; i <= len(s); i++ {
			if mp[s[:i]] {
				res = max(res, i)
			}
		}
	}
	return
}
