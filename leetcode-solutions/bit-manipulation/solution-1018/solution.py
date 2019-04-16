class Solution:
    def prefixesDivBy5(self, A: List[int]) -> List[bool]:
        result = []
        num = 0
        for i in range(len(A)):
            num = (num << 1) + A[i]
            result.append(num % 5 == 0)
        return result