class Solution:
    def addToArrayForm(self, A, K):
        A = int(''.join(map(str, A)))
        return list(map(int, list(str(A + K))))