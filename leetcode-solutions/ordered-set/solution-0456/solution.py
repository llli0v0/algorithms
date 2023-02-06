from typing import List
from sortedcontainers import SortedList

class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        left = SortedList([nums[0]])
        right = SortedList()
        for i in range(1, len(nums)):
            right.add(nums[i])
        for i in range(1, len(nums)):
            n = nums[i]
            right_index = right.index(n)
            if right_index > 0 and right[right_index - 1] > left[0]:
                return True
            right.remove(n)
            left.add(n)
        return False
