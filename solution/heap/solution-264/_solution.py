from heapq import *

class Solution:
    def nthUglyNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        heap, s, n = [1], set([1]), n - 1
        while n:
            a = heappop(heap)
            x, y, z = a * 2, a * 3, a * 5
            if not x in s:
                heappush(heap, x)
                s.add(x)
            if not y in s:
                heappush(heap, y)
                s.add(y)
            if not z in s:
                heappush(heap, z)
                s.add(z)
            n -= 1
        return heap[0]

if __name__ == '__main__':
    s = Solution()
    print(s.nthUglyNumber(7))