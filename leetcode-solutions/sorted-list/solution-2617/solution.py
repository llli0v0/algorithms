from typing import List
from sortedcontainers import SortedList

class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        if len(grid) == 1 and len(grid[0]) == 1: return 1
        comparer = lambda x: x[0]
        col = [SortedList([(1, 0, 0, grid[0][0])], key=comparer)]
        for i in range(1, len(grid[0])):
            sl = col[0]
            while len(sl) and i - sl[0][2] > sl[0][3]:
                sl.pop(0)
            if len(sl):
                sl.add((sl[0][0] + 1, 0, i, grid[0][i]))
                col.append(SortedList([(sl[0][0] + 1, 0, i, grid[0][i])], key=comparer))
            else:
                col.append(SortedList(key=comparer))
        if len(grid) == 1:
            return col[-1][0][0] if len(col[-1]) else -1
        row = [SortedList([(1, 0, 0, grid[0][0])], key=comparer)]
        for i in range(1, len(grid)):
            sl = row[0]
            while len(sl) and i - sl[0][1] > sl[0][3]:
                sl.pop(0)
            if len(sl):
                sl.add((sl[0][0] + 1, i, 0, grid[i][0]))
                row.append(SortedList([(sl[0][0] + 1, i, 0, grid[i][0])], key=comparer))
            else:
                row.append(SortedList(key=comparer))
        if len(grid[0]) == 1:
            return row[-1][0][0] if len(row[-1]) else -1
        for i in range(1, len(grid)):
            for j in range(1, len(grid[i])):
                el1 = None
                el2 = None
                sl1 = col[j]
                sl2 = row[i]
                while len(sl1) and i - sl1[0][1] > sl1[0][3]:
                    sl1.pop(0)
                if len(sl1):
                    el1 = (sl1[0][0] + 1, i, j, grid[i][j])
                while len(sl2) and j - sl2[0][2] > sl2[0][3]:
                    sl2.pop(0)
                if len(sl2):
                    el2 = (sl2[0][0] + 1, i, j, grid[i][j])
                el = None
                if el1 and el2:
                    el = el1 if el1[0] < el2[0] else el2
                elif el1:
                    el = el1
                elif el2:
                    el = el2
                if el:
                    sl1.add(el)
                    sl2.add(el)
        sl1 = row[-1]
        sl2 = col[-1]
        if len(sl1) and len(sl2):
            return min(sl1[0][0], sl2[0][0]) + 1
        elif len(sl1):
            return sl1[0][0] + 1
        elif len(sl2):
            return sl2[0][0] + 1
        return -1
