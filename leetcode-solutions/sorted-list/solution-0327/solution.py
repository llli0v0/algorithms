from typing import List
from sortedcontainers import SortedList

class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        pre_sum = 0
        sl = SortedList([0])
        res = 0
        for i in range(len(nums)):
            n = nums[i]
            pre_sum += n
            res += sl.bisect_right(pre_sum - lower) - sl.bisect_left(pre_sum - upper)
            sl.add(pre_sum)
        return res
