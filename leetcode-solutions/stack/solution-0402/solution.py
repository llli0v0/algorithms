class Solution:
    def removeKdigits(self, num, k):
        stack = [num[0]]
        num += '0'
        for i in range(1, len(num)):
            while stack and int(num[i]) < int(stack[-1]) and k:
                if stack.pop() != 0:
                    k -= 1
            if not stack and num[i] == '0': continue
            stack.append(num[i])
        return '0' if not stack else ''.join(stack[0:len(stack) - 1])

if __name__ == '__main__':
    S = Solution()
    print(S.removeKdigits('9', 1))