from math import lcm

class Solution:
    def minimizeSet(self, divisor1: int, divisor2: int, uniqueCnt1: int, uniqueCnt2: int) -> int:
        l, r, lc = 1, 10**10, lcm(divisor1, divisor2)
        while l < r:
            m = (l + r) // 2
            if m - m // divisor1 >= uniqueCnt1 and m - m // divisor2 >= uniqueCnt2 and m - m // lc >= uniqueCnt1 + uniqueCnt2:
                r = m
            else:
                l = m + 1
        return l
