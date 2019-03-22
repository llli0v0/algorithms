'''
All we need to know is that the result must be at one point higher
So you need to find the maximum area that is at each point
[2,1,5,6,2,3]
stack = [] result = 0
stack.push(2) result = 2
stack.pop(0): because 2 < 1 so 2 is die. stack.push(1): math.max(2, 2)
stack.push(5): 5 > 1 so 1 is alive. math.max(5, 2 + 1)
stack.push(6): 6 > 5 so 5 is alive. math.max(6, 5 + 5, 3 + 1)
stack.push(2): 5 and 6 is die. math.max(10, 4 + 1)
stack.push(3): 3 > 2 so 2 is alive. math.max(10, 3, 2 + 2, 5 + 1)
so this is a monotonous stack problem

class Solution:
    def largestRectangleArea(self, heights):
        if not heights:
            return 0
        stack, result = [0], heights[0]
        for i in range(1, len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                stack.pop()
            stack.append(i)
            result = max(result, heights[stack[0]] * (i + 1))
            for j in range(1, len(stack)):
                result = max(result, (i - stack[j - 1]) * heights[stack[j]])
        return result
if use this code, I'm running out of time, It's O(n**2)
'''
# O(n)
class Solution:
    def largestRectangleArea(self, heights):
        if not heights:
            return 0
        stack, result = [0], heights[0]
        for i in range(1, len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                result = max(result, heights[stack.pop()] * (i - stack[-1] - 1 if stack else i))
            stack.append(i)
        result = max(result, heights[stack[0]] * len(heights))
        for i in range(1, len(stack)):
            result = max(result, heights[stack[i]] * (len(heights) - stack[i - 1] - 1))
        return result

if __name__ == '__main__':
    S = Solution()
    print(S.largestRectangleArea([2,1,2]))