from heapq import *

class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: List[List[int]]
        """
        if not nums1 or not nums2: return []
        heap = []
        for m in nums1:
            for n in nums2:
                heappush(heap, (m + n, m, n))
        result = []
        while k:
            if not heap: return result
            item = heappop(heap)
            result.append([item[1], item[2]])
            k -= 1
        return result

if __name__ == '__main__':
    s = Solution()
    print(s.kSmallestPairs([1,1,2], [1,2,3], 10))