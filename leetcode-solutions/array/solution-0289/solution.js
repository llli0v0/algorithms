/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      check(i, j);
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (Array.isArray(board[i][j])) {
        board[i][j] = board[i][j][1];
      }
    }
  }
  function check(i, j) {
    let live = 0;
    if (board[i - 1] && (Array.isArray(board[i - 1][j - 1]) ? board[i - 1][j - 1][0] : board[i - 1][j - 1])) live++;
    if (board[i - 1] && (Array.isArray(board[i - 1][j]) ? board[i - 1][j][0] : board[i - 1][j])) live++;
    if (board[i - 1] && (Array.isArray(board[i - 1][j + 1]) ? board[i - 1][j + 1][0] : board[i - 1][j + 1])) live++;
    if (Array.isArray(board[i][j - 1]) ? board[i][j - 1][0] : board[i][j - 1]) live++;
    if (board[i][j + 1]) live++;
    if (board[i + 1] && board[i + 1][j - 1]) live++;
    if (board[i + 1] && board[i + 1][j]) live++;
    if (board[i + 1] && board[i + 1][j + 1]) live++;
    if (live < 2) {
      board[i][j] = [board[i][j], 0];
    } else if (live > 3) {
      board[i][j] = [board[i][j], 0];
    } else if (live === 3) {
      board[i][j] = [board[i][j], 1];
    }
  }
};

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);