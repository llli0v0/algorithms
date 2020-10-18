from sortedcontainers import SortedList
from typing import List
import heapq
class Solution:
    def busiestServers(self, k: int, arrival: List[int], load: List[int]) -> List[int]:
        free = SortedList(range(k))
        timeline = []
        n = len(arrival)
        count = [0 for i in range(k)]
        for i in range(n):
            while len(timeline) > 0:
                t, pos = heapq.heappop(timeline)
                if t <= arrival[i]:
                    free.add(pos)
                else:
                    heapq.heappush(timeline, (t, pos))
                    break
            if len(free) == 0:
                continue
            key = free.bisect_left(i % k)
            if key < len(free):
                pos = free[key]
            else:
                pos = free[0]
            count[pos] += 1
            free.remove(pos)
            heapq.heappush(timeline, (arrival[i] + load[i], pos))
        max_ = max(count)
        ans = []
        for i in range(k):
            if count[i] == max_:
                ans.append(i)
        return ans