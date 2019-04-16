class Solution:
    def findComplement(self, num):
        return int(bin(num)[2:].replace('1', 'm').replace('0', '1').replace('m', '0'), 2)

if __name__ == '__main__':
    S = Solution()
    S.findComplement(5)