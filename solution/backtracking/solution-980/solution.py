class Solution:
    def __init__(self):
        self.result = 0
        self.fullLen = 0

    def uniquePathsIII(self, grid):
        for m in range(len(grid)):
            for n in range(len(grid[m])):
                if grid[m][n] == 1:
                    current = [m, n]
                if grid[m][n] == 0:
                    self.fullLen += 1
        self.nextStep(current, grid, [0, -1], str(current[0]) + '_' + str(current[1]))
        self.nextStep(current, grid, [0, 1], str(current[0]) + '_' + str(current[1]))
        self.nextStep(current, grid, [1, 0], str(current[0]) + '_' + str(current[1]))
        self.nextStep(current, grid, [-1, 0], str(current[0]) + '_' + str(current[1]))
        return self.result
    
    def nextStep(self, current, grid, direction, cache):
        _next = [current[0] + direction[0], current[1] + direction[1]]
        if _next[0] < 0 or _next[0] >= len(grid) or _next[1] < 0 or _next[1] >= len(grid[0]):
            return
        if grid[_next[0]][_next[1]] == -1 or grid[_next[0]][_next[1]] == 1:
            return
        if cache.find(str(_next[0]) + '_' + str(_next[1])) != -1:
            return
        if grid[_next[0]][_next[1]] == 2 and len(cache) == (self.fullLen + 1) * 4 - 1:
            self.result += 1
            return
        self.nextStep(_next, grid, [0, -1], cache + '-' + str(_next[0]) + '_' + str(_next[1]))
        self.nextStep(_next, grid, [0, 1], cache + '-' + str(_next[0]) + '_' + str(_next[1]))
        self.nextStep(_next, grid, [1, 0], cache + '-' + str(_next[0]) + '_' + str(_next[1]))
        self.nextStep(_next, grid, [-1, 0], cache + '-' + str(_next[0]) + '_' + str(_next[1]))

if __name__ == '__main__':
    s = Solution()
    print(s.uniquePathsIII([[0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,1,0]]))