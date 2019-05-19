from typing import List

class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        result = []
        for i in range(len(A)):
            if A[i] % 2:
                result.append(A[i])
            else:
                result.insert(0, A[i])
        return result