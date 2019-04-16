from heapq import *

class Solution:
    def kthSmallest(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
        heap = []
        for m in matrix:
            for n in m:
                heappush(heap, n)
        while k:
            r = heappop(heap)
            k -= 1
        return r

if __name__ == '__main__':
    s = Solution()
    print(s.kthSmallest([[ 1,  5,  9],[10, 11, 13],[12, 13, 15]], 6))
