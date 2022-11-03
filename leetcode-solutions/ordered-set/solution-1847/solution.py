from sortedcontainers import SortedList
from typing import List
import math

class Solution:
    def closestRoom(self, rooms: List[List[int]], queries: List[List[int]]) -> List[int]:
        sl = SortedList()
        def getSecond(elem):
            return elem[1]
        for i in range(len(queries)):
            queries[i].append(i)
        rooms.sort(key = getSecond, reverse = True)
        queries.sort(key = getSecond, reverse = True)
        res, cur = [0] * len(queries), 0
        for i in range(len(queries)):
            q = queries[i]
            [d, minSize, index] = q
            while cur < len(rooms) and rooms[cur][1] >= minSize:
                sl.add(rooms[cur][0])
                cur += 1
            if len(sl) == 0:
                res[index] = -1
            else:
                l, r = 0, len(sl) - 1
                if d <= sl[0]:
                    res[index] = sl[0]
                    continue
                elif d >= sl[-1]:
                    res[index] = sl[-1]
                    continue
                while l < r:
                    m = math.ceil((l + r) / 2)
                    if sl[m] > d:
                        r = m - 1
                    else:
                        l = m
                a, b = abs(sl[l] - d), abs(sl[l + 1] - d)
                if a > b:
                    res[index] = sl[l + 1]
                else:
                    res[index] = sl[l]
        return res
