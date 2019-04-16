from heapq import *

class Solution:
    def networkDelayTime(self, times, N, K):
        heap = []
        aler = set([])
        aler.add(K)
        graph = {}
        for i in range(len(times)):
            if not times[i][0] in graph:
                graph[times[i][0]] = {}
            graph[times[i][0]][times[i][1]] = times[i][2]
        if K in graph:
            for m in graph[K]:
                heappush(heap, (graph[K][m], m))
        result = 0
        while heap and len(aler) < N:
            cur = heappop(heap)
            aler.add(cur[1])
            if cur[1] in graph:
                for m in graph[cur[1]]:
                    if not m in aler:
                        heappush(heap, (graph[cur[1]][m] + cur[0], m))
            result = cur[0]
        return result if len(aler) == N else -1

if __name__ == '__main__':
    S = Solution()
    print(S.networkDelayTime([[1,5,66],[3,5,55],[4,3,29],[1,2,9],[3,4,10],[3,1,3],[2,3,78],[1,4,98],[4,5,21],[5,2,19],[5,1,76],[4,1,65],[3,2,27],[5,3,23],[5,4,12],[2,1,36],[4,2,75],[2,4,11],[1,3,30],[2,5,8]], 5, 1))