package solution2380

func secondsToRemoveOccurrences(s string) (res int) {
	runes := []rune(s)
	next := true
	for next {
		f := false
		for i := 0; i < len(runes); i++ {
			if string(runes[i]) == "0" && i+1 < len(runes) && string(runes[i+1]) == "1" {
				runes[i], runes[i+1] = runes[i+1], runes[i]
				f = true
				i++
			}
		}
		next = f
		if f {
			res++
		}
	}
	return
}
