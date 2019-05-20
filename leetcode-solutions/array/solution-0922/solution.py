from typing import List

class Solution:
    def sortArrayByParityII(self, A: List[int]) -> List[int]:
        odd = []
        even = []
        for i in range(len(A)):
            if A[i] % 2:
                odd.append(A[i])
            else:
                even.append(A[i])
        result = []
        while even:
            result.append(even.pop(0))
            result.append(odd.pop(0))
        return result