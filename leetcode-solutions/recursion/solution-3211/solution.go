package solution3211

func validStrings(n int) (res []string) {
	var helper func(int, string)

	helper = func(n int, s string) {
		if n == 0 {
			res = append(res, s)
			return
		}
		if s[0] == '0' {
			helper(n-1, "1"+s)
		} else {
			helper(n-1, "0"+s)
			helper(n-1, "1"+s)
		}
	}

	helper(n-1, "0")
	helper(n-1, "1")

	return
}
