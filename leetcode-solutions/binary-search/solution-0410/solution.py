from typing import List

class Solution:
    def splitArray(self, nums: List[int], m: int) -> int:
        L, R = max(nums), sum(nums)

        while L < R:
            M = (L + R) // 2
            s, n = 0, 1
            for w in nums:
                s += w
                if s > M:
                    s = w
                    n += 1
            if n <= m:
                R = M
            else:
                L = M + 1

        return L