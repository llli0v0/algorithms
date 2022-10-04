from bisect import bisect_right
from typing import List
from sortedcontainers import SortedList

class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], diff: int) -> int:
        arr = []
        for i in range(len(nums1)):
            arr.append(nums1[i] - nums2[i])
        sl = SortedList()
        res = 0
        for i in range(len(arr)):
            res += bisect_right(sl, arr[i] + diff)
            sl.add(arr[i])
        return res
