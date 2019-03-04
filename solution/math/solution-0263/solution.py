class Solution:
    def isUgly(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 0: return False
        if num == 1: return True
        if not num % 2:
            return self.isUgly(num / 2)
        elif not num % 3:
            return self.isUgly(num / 3)
        elif not num % 5:
            return self.isUgly(num / 5)
        else:
            return False

if __name__ == '__main__':
    s = Solution()
    print(s.isUgly(21))