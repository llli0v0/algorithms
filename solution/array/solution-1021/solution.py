class Solution:
    def maxScoreSightseeingPair(self, A):
        result = 0
        cur = A[0]
        for i in range(1, len(A)):
            result = max(result, cur - 1 + A[i])
            cur = max(cur - 1, A[i])
        return result

if __name__ == '__main__':
    S = Solution()
    S.maxScoreSightseeingPair([8,1,5,2,6])