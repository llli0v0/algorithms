from typing import List
import math

class Solution:
    def minEatingSpeed(self, piles: List[int], H: int) -> int:
        L, R = 1, max(piles)

        while L < R:
            M, h = (L + R) // 2, 0
            for p in piles:
                h += math.ceil(p / M)
            if h <= H:
                R = M
            else:
                L = M + 1
        return L