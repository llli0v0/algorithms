from typing import List
from sortedcontainers import SortedList

class Solution:
    def countOperationsToEmptyArray(self, nums: List[int]) -> int:
        sl = SortedList(list(range(0, len(nums))))
        for i in range(0, len(nums)):
            nums[i] = [nums[i], i]
        nums.sort(key=lambda x: x[0])
        a = 0
        res = 0
        for i in range(0, len(nums)):
            idx = nums[i][1]
            b = sl.index(idx)
            if b >= a:
                res += b - a + 1
            else:
                res += len(sl) - a + b + 1
            a = b
            sl.remove(idx)
        return res
