package solution2381

func shiftingLetters(s string, shifts [][]int) (res string) {
    opts := make(map[int]int)
    for _, v := range shifts {
        start, end, step := v[0], v[1], v[2]
        if step == 1 {
            opts[start]++
            if end+1 < len(s) {
                opts[end+1]--
            }
        } else {
            opts[start]--
            if end+1 < len(s) {
                opts[end+1]++
            }
        }
    }
    runes := []rune(s)
    var opt int
    for i, v := range runes {
        opt += opts[i]
        n := int(v) + opt - 97 + 26*5000
        runes[i] = rune(n%26 + 97)
    }
    res = string(runes)
    return
}
