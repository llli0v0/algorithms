from heapq import *

class Solution:
    def nthSuperUglyNumber(self, n, primes):
        """
        :type n: int
        :type primes: List[int]
        :rtype: int
        """
        h, heap = set([1]), [1]
        while n:
            a = heappop(heap)
            for i in primes:
                m = a * i
                if not m in h:
                    heappush(heap, m)
                    h.add(m)
            n -= 1
        return a

if __name__ == '__main__':
    s = Solution()
    s.nthSuperUglyNumber(12, [2,7,13,19])
