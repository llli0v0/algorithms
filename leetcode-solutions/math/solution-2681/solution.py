from typing import List

class Solution:
    def sumOfPower(self, nums: List[int]) -> int:
        nums.sort()
        mod = 10 ** 9 + 7
        res = 0
        n = 0
        for i in range(len(nums)):
            lt = nums[i - 1] if i - 1 >= 0 else 0
            res += nums[i] ** 3
            res += nums[i] ** 2 * lt
            n *= 2
            res = (res + n * nums[i] ** 2) % mod
            n = (n + lt) % mod
        return res
