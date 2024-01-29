from sortedcontainers import SortedList
from typing import List

class Solution:
    def fallingSquares(self, positions: List[List[int]]) -> List[int]:
        sl = SortedList(key = lambda x: x[0])
        res, max_height = [], 0
        for i in range(len(positions)):
            pos = positions[i]
            pos = [pos[0], pos[0] + pos[1] - 1, pos[1]]
            index = sl.bisect_left(pos)
            if index - 1 >= 0 and pos[0] <= sl[index - 1][1]: index -= 1
            arr, cur_max_height = [], 0
            while index < len(sl):
                a, b = sl[index][0], sl[index][1]
                x, y = pos[0], pos[1]
                if x >= a and x <= b or y >= a and y <= b or a <= x and b >= y or a >= x and b <= y:
                    cur_max_height = max(cur_max_height, sl[index][2])
                    arr.append(sl.pop(index))
                else: break
            if len(arr) > 0:
                head = arr[0]
                tail = arr[-1]
                if head[0] < pos[0]:
                    sl.add([head[0], pos[0] - 1, head[2]])
                if tail[1] > pos[1]:
                    sl.add([pos[1] + 1, tail[1], tail[2]])
            h = pos[2] + cur_max_height
            max_height = max(max_height, h)
            sl.add([pos[0], pos[1], h])
            res.append(max_height)
        return res
