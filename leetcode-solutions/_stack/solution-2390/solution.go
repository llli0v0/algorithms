package solution2390

func removeStars(s string) (res string) {
    arr := []rune(s)
    stack := []int32{}
    for _, v := range arr {
        if v == 42 {
            stack = stack[:len(stack)-1]
        } else {
            stack = append(stack, v)
        }
    }
    res = string(stack)
    return
}
