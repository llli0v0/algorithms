class Solution:
    def hammingDistance(self, x, y):
        return bin(x ^ y).count('1')

if __name__ == '__main__':
    S = Solution()
    print(S.hammingDistance(1, 4))