/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board.length || !board[0].length) return;
  let s = new Set();
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] === 'O' && !s.has(0 + ' ' + i)) helper(0, i);
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 'O' && !s.has(i + ' ' + 0)) helper(i, 0);
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][board[0].length - 1] === 'O' && !s.has(i + ' ' + board[0].length - 1)) helper(i, board[0].length - 1);
  }
  for (let i = 0; i < board[0].length; i++) {
    if (board[board.length - 1][i] === 'O' && !s.has(board.length - 1 + ' ' + i)) helper(board.length - 1, i);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O' && !s.has(i + ' ' + j)) board[i][j] = 'X';
    }
  }
  function helper(x, y) {
    let a = [[x, y]];
    s.add(x + ' ' + y);
    while (a.length) {
      let b = a.pop();
      s.add(b[0] + ' ' + b[1]);
      if (board[b[0] - 1] && board[b[0] - 1][b[1]] === 'O' && !s.has(b[0] - 1 + ' ' + b[1])) a.push([b[0] - 1, b[1]]);
      if (board[b[0] + 1] && board[b[0] + 1][b[1]] === 'O' && !s.has(b[0] + 1 + ' ' + b[1])) a.push([b[0] + 1, b[1]]);
      if (board[b[0]][b[1] - 1] === 'O' && !s.has(b[0] + ' ' + (b[1] - 1))) a.push([b[0], b[1] - 1]);
      if (board[b[0]][b[1] + 1] === 'O' && !s.has(b[0] + ' ' + (b[1] + 1))) a.push([b[0], b[1] + 1]);
    }
  }
};