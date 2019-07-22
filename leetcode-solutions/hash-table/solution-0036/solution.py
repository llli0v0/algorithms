from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        a = [0] * len(board[0])
        b = [[0] * 3 for _ in range(3)]

        for i in range(len(board)):
            c = 0
            for j in range(len(board[i])):
                if board[i][j] != '.':
                    d = 1 << int(board[i][j])

                    if d & a[j] == d:
                        return False
                    
                    x = i // 3
                    y = j // 3
                    if d & b[x][y] == d:
                        return False

                    if d & c == d:
                        return False

                    a[j] += d
                    b[x][y] += d
                    c += d

        return True