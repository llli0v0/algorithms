package solution2433

func findArray(pref []int) (res []int) {
    res = append(res, pref[0])
    for i := 1; i < len(pref); i++ {
        res = append(res, pref[i]^pref[i-1])
    }
    return res
}
