from collections import Counter
from heapq import *

class Solution:
    def topKFrequent(self, words, k):
        """
        :type words: List[str]
        :type k: int
        :rtype: List[str]
        """
        count = dict(Counter(words))
        heap = []
        for n in count.items():
            heappush(heap, (-n[1], n[0]))
        result = []
        while k:
            result.append(heappop(heap)[1])
            k -= 1
        return result

if __name__ == '__main__':
    s = Solution()
    print(s.topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))