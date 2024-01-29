from typing import List
from sortedcontainers import SortedList

class Solution:
    def minimumCost(self, nums: List[int], k: int, dist: int) -> int:
        L = SortedList(nums[1:dist + 2])
        R = SortedList()
        L_sum = sum(nums[1:dist + 2])
        while len(L) > k - 1:
            item = L.pop()
            L_sum -= item
            R.add(item)
        res = nums[0] + L_sum
        for i in range(dist + 2, len(nums)):
            d = nums[i - dist - 1]
            if d in L:
                L.remove(d)
                L_sum -= d
            else:
                R.remove(d)
            R.add(nums[i])
            item = R.pop(0)
            L.add(item)
            L_sum += item
            if len(L) > k - 1:
                item = L.pop()
                R.add(item)
                L_sum -= item
            res = min(res, L_sum + nums[0])
        return res