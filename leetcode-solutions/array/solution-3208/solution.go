package solution3208

func numberOfAlternatingGroups(colors []int, k int) (res int) {
	arr := make([]int, len(colors))
	arr[0] = 1
	for i := 1; i < len(colors); i++ {
		if colors[i] != colors[i-1] {
			arr[i] = arr[i-1] + 1
		} else {
			arr[i] = 1
		}
	}
	for i := 0; i < len(arr); i++ {
		if arr[i] >= k || arr[i] == i+1 && colors[0] != colors[len(colors)-1] && arr[i]+arr[len(arr)-1] >= k {
			res++
		}
	}
	return
}
