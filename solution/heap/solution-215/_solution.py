from heapq import *

class Solution:
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        count = {}
        heap = []
        for n in nums:
            if not n in count:
                count[n] = 1
                heappush(heap, -n)
            else:
                count[n] += 1
        res = 0
        while k > 0:
            res = -heappop(heap)
            k -= count[res]
        return res

if __name__ == '__main__':
    s = Solution()
    print(s.findKthLargest([3,2,1,5,6,4], 2))