import math

class Solution:
    def superpalindromesInRange(self, L, R):
        L = int(L)
        R = int(R)

        M = {}
        M[0] = [['', 0]]
        M[1] = [['0', 0], ['1', 1], ['2', 4], ['3', 9], ['4', 16], ['5', 25], ['6', 36], ['7', 49], ['8', 64], ['9', 81]]

        rlen = len(str(int(math.sqrt(R))))
        rlen = min(rlen, 9)

        for i in range(2, rlen + 1):
            M[i] = []
            for j in range(0, len(M[i - 2])):
                for n in range(0, 10):
                    m = str(n) + M[i - 2][j][0] + str(n)
                    s = int(m)**2
                    M[i].append([m, s])

        result = 0

        for k in M:
            a = M[k]
            for i in range(0, len(a)):
                if self.helper(a[i][1], L, R):
                    result += 1

        return result
    
    def helper(self, s, L, R):
        if s < L or s > R:
            return False

        s = str(s)

        if s[0] == '0':
            return False
        
        m = int(math.floor(len(s) / 2))
        for i in range(0, m):
            if s[i] != s[len(s) - i - 1]:
                return False
        return True