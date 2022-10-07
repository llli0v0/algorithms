package solution0087

var dp = make(map[string]bool)

func isScramble(s1 string, s2 string) bool {
    key := s1 + s2
    if v, ok := dp[key]; ok {
        return v
    }
    if s1 == s2 {
        return true
    }
    for i := 0; i < len(s1)-1; i++ {
        a := isScramble(s1[:i+1], s2[:i+1])
        b := isScramble(s1[i+1:], s2[i+1:])
        c := isScramble(s1[:i+1], s2[len(s2)-1-i:])
        d := isScramble(s1[i+1:], s2[:len(s2)-1-i])
        if a && b || c && d {
            dp[key] = true
            return true
        }
    }
    dp[key] = false
    return false
}
