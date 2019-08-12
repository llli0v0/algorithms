import math

class Solution:
    def smallestGoodBase(self, n: str) -> str:
        n = int(n)

        l = math.ceil(math.log2(n))

        def helper(M, i):
            s = 0

            for j in range(0, i):
                s += pow(M, j)
                if s > n: break
            return s

        for i in range(l, 1, -1):
            L = 2
            R = n

            while L < R:
                M = (L + R) // 2

                s = helper(M, i)

                if s >= n:
                    R = M
                else:
                    L = M + 1
            
            if helper(L, i) == n:
                return str(L)