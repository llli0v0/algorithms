from collections import Counter
from heapq import *

class Solution:
    def reorganizeString(self, S):
        """
        :type S: str
        :rtype: str
        """
        c = Counter(S)
        heap = []
        for k, v in c.items():
            heappush(heap, (-v, k))
        r = ''
        while heap:
            m, n = heappop(heap)
            m += 1
            r += n
            if heap:
                a, b = heappop(heap)
                a += 1
                r += b
                if a < 0: heappush(heap, (a, b))
            else:
                if m < 0: return ''
            if m < 0: heappush(heap, (m, n))
        return r

if __name__ == '__main__':
    s = Solution()
    print(s.reorganizeString("aab"))