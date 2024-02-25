package solution3039

import "slices"

func lastNonEmptyString(s string) string {
	cnt := make([][]int, 26)
	for i := range cnt {
		cnt[i] = make([]int, 2)
	}
	mx := 0
	for i, a := range s {
		a -= 'a'
		cnt[a][0]++
		cnt[a][1] = i
		mx = max(mx, cnt[a][0])
	}
	idx := make([]int, 0)
	for _, a := range cnt {
		if a[0] == mx {
			idx = append(idx, a[1])
		}
	}
	slices.Sort(idx)
	x := make([]byte, len(idx))
	for i, j := range idx {
		x[i] = s[j]
	}
	return string(x)
}
