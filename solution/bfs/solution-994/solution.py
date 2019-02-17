class Solution:
    def orangesRotting(self, grid):
        goodCount = 0
        badItems, nextBadItems = [], []
        times = -1
        for m in range(len(grid)):
            if type(grid[m]) != list:
                break
            for n in range(len(grid[0])):
                if grid[m][n] == 1:
                    goodCount += 1
                if grid[m][n] == 2:
                    badItems.append((m, n))
        if not goodCount: return 0
        while badItems or goodCount:
            if not badItems: break
            item = badItems.pop()
            if item[0] > 0 and grid[item[0] - 1][item[1]] == 1:
                grid[item[0] - 1][item[1]] = 2
                goodCount -= 1
                nextBadItems.append((item[0] - 1, item[1]))
            if item[0] < len(grid) - 1 and grid[item[0] + 1][item[1]] == 1:
                grid[item[0] + 1][item[1]] = 2
                goodCount -= 1
                nextBadItems.append((item[0] + 1, item[1]))
            if item[1] > 0 and grid[item[0]][item[1] - 1] == 1:
                grid[item[0]][item[1] - 1] = 2
                goodCount -= 1
                nextBadItems.append((item[0], item[1] - 1))
            if item[1] < len(grid[0]) - 1 and grid[item[0]][item[1] + 1] == 1:
                grid[item[0]][item[1] + 1] = 2
                goodCount -= 1
                nextBadItems.append((item[0], item[1] + 1))
            if not badItems:
                times += 1
                badItems = nextBadItems
                nextBadItems = []
        if goodCount: return -1
        return times

if __name__ == '__main__':
    s = Solution()
    print(s.orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))