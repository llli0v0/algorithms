from heapq import *

class Solution:
    def findCheapestPrice(self, n, flights, src, dst, K):
        graph = {}
        result = float('inf')
        find = False
        seen = {}
        for i in range(len(flights)):
            item = flights[i]
            if not item[0] in graph:
                graph[item[0]] = {}
            graph[item[0]][item[1]] = item[2]
        heap = []
        if src in graph:
            for key in graph[src]:
                if key == dst:
                    find = True
                    result = graph[src][key] if result > graph[src][key] else result
                heappush(heap, (graph[src][key], key, 0))
        while heap:
            cur = heappop(heap)
            if cur[2] + 1 > K or cur[1] in seen and seen[cur[1]] < cur[2]: continue
            seen[cur[1]] = cur[2]
            if cur[1] in graph:
                for key in graph[cur[1]]:
                    su = graph[cur[1]][key] + cur[0]
                    if key == dst:
                        find = True
                        result = su if result > su else result
                    heappush(heap, (su, key, cur[2] + 1))
        return -1 if not find else result

if __name__ == '__main__':
    S = Solution()
    print(S.findCheapestPrice(5, [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]], 0, 2, 2))