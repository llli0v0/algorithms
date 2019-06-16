from heapq import *
from typing import *

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [ -1 * i for i in stones ]
        heapify(stones)
        while len(stones) > 1:
            a = heappop(stones)
            b = heappop(stones)
            if a - b:
                heappush(stones, -abs(a - b))
        if not stones:
            return 0
        return -stones[0]