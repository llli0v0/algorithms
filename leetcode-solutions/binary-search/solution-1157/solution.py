from typing import List
import collections
import random
import bisect

class MajorityChecker:

    def __init__(self, arr: List[int]):
        a = collections.defaultdict(list)
        for i, v in enumerate(arr):
            a[v].append(i)
        self.arr, self.M = arr, a

    def query(self, left: int, right: int, threshold: int) -> int:
        for _ in range(20):
            a = self.arr[random.randrange(right - left + 1) + left]
            l = bisect.bisect_left(self.M[a], left)
            r = bisect.bisect_right(self.M[a], right)

            if r - l + 1 > threshold:
                return a
        return -1

# Your MajorityChecker object will be instantiated and called as such:
# obj = MajorityChecker(arr)
# param_1 = obj.query(left,right,threshold)