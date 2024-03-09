from typing import List
from sortedcontainers import SortedList

class Solution:
    def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
        res = [-1] * len(queries)
        nq = []
        for i in range(len(queries)):
            q = queries[i]
            i1, i2 = q[0], q[1]
            h1, h2 = heights[i1], heights[i2]
            if i1 == i2:
                res[i] = i1
            elif i2 > i1 and h2 > h1:
                res[i] = i2
            elif i1 > i2 and h1 > h2:
                res[i] = i1
            else:
                nq.append([max(i1, i2), max(h1, h2), i])
        nq.sort(key=lambda x: x[0])
        j = 0
        sl = SortedList(key=lambda x: x[0])
        for i, h in enumerate(heights):
            while j < len(nq) and nq[j][0] < i:
                h1, x = nq[j][1], nq[j][2]
                sl.add([h1, x])
                j += 1
            while len(sl) and sl[0][0] < h:
                res[sl.pop(0)[1]] = i
        return res