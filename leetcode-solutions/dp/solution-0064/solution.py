class Solution:
    def minPathSum(self, grid):
        matrix = []
        for i in range(len(grid)):
            matrix.append([0] * len(grid[0]))
        matrix[len(grid) - 1][len(grid[0]) - 1] = grid[len(grid) - 1][len(grid[0]) - 1]
        for i in range(len(matrix[0]) - 2, -1, -1):
            matrix[len(grid) - 1][i] = grid[len(grid) - 1][i] + matrix[len(grid) - 1][i + 1]
        for i in range(len(matrix) - 2, -1, -1):
            matrix[i][len(grid[0]) - 1] = grid[i][len(grid[0]) - 1] + matrix[i + 1][len(grid[0]) - 1]
        for i in range(len(matrix) - 2, -1, -1):
            for j in range(len(matrix[0]) - 2, -1, -1):
                matrix[i][j] = min(matrix[i + 1][j] + grid[i][j], matrix[i][j + 1] + grid[i][j])
        return matrix[0][0]

if __name__ == '__main__':
    S = Solution()
    S.minPathSum([[1,3,1],[1,5,1],[4,2,1]])