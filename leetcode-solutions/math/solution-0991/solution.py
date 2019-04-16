class Solution:
    def brokenCalc(self, X, Y):
        if X >= Y: return X - Y
        if Y % 2:
            return int(2 + self.brokenCalc(X, (Y + 1) / 2))
        else:
            return int(1 + self.brokenCalc(X, Y / 2))

if __name__ == '__main__':
    s = Solution()
    print(s.brokenCalc(1, 1000000000))