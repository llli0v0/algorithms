from heapq import *
class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        heap, result = [], []
        for i in range(len(points)):
            heappush(heap, (points[i][0]**2 + points[i][1]**2, points[i]))
        while K:
            result.append(heappop(heap)[1])
            K -= 1
        return result