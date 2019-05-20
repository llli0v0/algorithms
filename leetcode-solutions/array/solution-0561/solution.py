from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        result = 0
        nums.sort()
        for i in range(len(nums)):
            if not i % 2:
                result += nums[i]
        return result