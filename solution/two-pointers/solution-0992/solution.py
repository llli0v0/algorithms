import collections

class Solution:
    def subarraysWithKDistinct(self, A, K):
        count = collections.Counter()
        point2 = start = result = 0
        for point1 in range(len(A)):
            count[A[point1]] += 1
            if len(count) > K:
                del count[A[point2]]
                point2 += 1
                start = point2
            if len(count) == K:
                while count[A[point2]] > 1:
                    count[A[point2]] -= 1
                    point2 += 1
                result += point2 - start + 1
        return result

if __name__ == '__main__':
    s = Solution()
    print(s.subarraysWithKDistinct([1,1,1,2,1,2,2,2,1,2], 1))