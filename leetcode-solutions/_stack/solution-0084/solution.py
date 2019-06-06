class Solution:
    def largestRectangleArea(self, heights):
        if not heights:
            return 0
        stack, result = [0], heights[0]
        for i in range(1, len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                result = max(result, heights[stack.pop()] * (i - stack[-1] - 1 if stack else i))
            stack.append(i)
        if stack: result = max(result, heights[stack[0]] * len(heights))
        for i in range(1, len(stack)):
            result = max(result, heights[stack[i]] * (len(heights) - stack[i - 1] - 1))
        return result

if __name__ == '__main__':
    S = Solution()
    print(S.largestRectangleArea([2,1,2]))