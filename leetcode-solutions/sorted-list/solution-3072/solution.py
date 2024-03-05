from typing import List
from sortedcontainers import SortedList

class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        n0, n1 = nums[0], nums[1]
        sl1, sl2 = SortedList([n0]), SortedList([n1])
        arr1, arr2 = [n0], [n1]
        for n in nums[2:]:
            l1, l2 = len(arr1), len(arr2)
            a, b = l1 - sl1.bisect_right(n), l2 - sl2.bisect_right(n)
            if a > b or a == b and l1 <= l2:
                arr1.append(n)
                sl1.add(n)
            else:
                arr2.append(n)
                sl2.add(n)
        return arr1 + arr2