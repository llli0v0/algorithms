from typing import List
from math import ceil

class Solution:
    def maxFrequencyScore(self, nums: List[int], k: int) -> int:
        nums.sort()
        pre_sum = [nums[0]]
        for i in range(1, len(nums)):
            pre_sum.append(pre_sum[-1] + nums[i])
        l = 0
        r = len(nums)
        while l < r:
            m = ceil((l + r) / 2)
            is_can = False
            for i in range(len(nums) - m + 1):
                bf_i_sum = (pre_sum[i - 1] if i - 1 >= 0 else 0)
                idx = (i + m - 1 + i) // 2
                if (idx - i + 1) * nums[idx] - pre_sum[idx] + bf_i_sum + pre_sum[i + m - 1] - pre_sum[idx] - (i + m - 1 - idx) * nums[idx] <= k:
                    is_can = True
                    break
            if is_can:
                l = m
            else:
                r = m - 1
        return l
