from typing import List
from sortedcontainers import SortedList

class Solution:
    def sumImbalanceNumbers(self, nums: List[int]) -> int:
        res = 0
        for i in range(1, len(nums)):
            l = SortedList([nums[i]])
            c = 0
            for j in range(i - 1, -1, -1):
                n = nums[j]
                l.add(n)
                idx = l.index(n)
                if idx == 0:
                    if l[1] - n > 1:
                        c += 1
                elif idx == len(l) - 1:
                    if n - l[-2] > 1:
                        c += 1
                elif n - l[idx - 1] > 1 and l[idx + 1] - n > 1:
                    c += 1
                elif n - l[idx - 1] == 1 and l[idx + 1] - n == 1:
                    c -= 1
                res += c
        return res
