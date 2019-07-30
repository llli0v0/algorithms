from typing import List

class Solution:
    def sumSubseqWidths(self, A: List[int]) -> int:
        if len(A) < 2:
            return 0

        A.sort()

        S = [[0, 0], [A[1] - A[0], 1]]
        B = 10**9 + 7

        for i in range(2, len(A)):
            S.append([0, 0])
            S[i][1] = (S[i - 1][1] * 2 + 1) % B
            S[i][0] = (S[i - 1][0] * 2 + (A[i] - A[i - 1]) * S[i][1]) % B
        
        result = 0

        for i in range(len(S)):
            result = (result + S[i][0]) % B

        return result