class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        for num in nums:
            if not num in count:
                count[num] = 0
            count[num] += 1
        count = sorted(count.items(), key = lambda x: x[1], reverse = True)
        r = []
        for v in count:
            r.append(v[0])
        return r[:k]

if __name__ == '__main__':
    s = Solution()
    print(s.topKFrequent([4,1,-1,2,-1,2,3], 2))