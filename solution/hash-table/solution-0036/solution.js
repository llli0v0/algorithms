/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let block = {};
  block.lt = {}, block.mt = {}, block.rt = {}, block.ml = {}, block.mm = {}, block.mr = {}, block.bl = {}, block.bm = {}, block.br = {};
  let result = true;
  checkBlock(0, 3, 0, 3, 'lt');
  checkBlock(0, 3, 3, 6, 'mt');
  checkBlock(0, 3, 6, 9, 'rt');
  checkBlock(3, 6, 0, 3, 'ml');
  checkBlock(3, 6, 3, 6, 'mm');
  checkBlock(3, 6, 6, 9, 'mr');
  checkBlock(6, 9, 0, 3, 'bl');
  checkBlock(6, 9, 3, 6, 'bm');
  checkBlock(6, 9, 6, 9, 'br');
  if (!result) return result;
  checkLine();
  return result;
  function checkBlock(m, n, x, y, key) {
    for (let i = m; i < n; i++) {
      for (let j = x; j < y; j++) {
        if (board[i][j] !== '.') {
          if (block[key][board[i][j]]) result = false;
          block[key][board[i][j]] = true;
        }
      }
    }
  }
  function checkLine() {
    let row = {}, col = {};
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== '.') {
          if (row[i] === undefined) row[i] = {};
          if (!row[i][board[i][j]]) {
            row[i][board[i][j]] = true;
          } else {
            result = false;
          }
          if (col[j] === undefined) col[j] = {};
          if (!col[j][board[i][j]]) {
            col[j][board[i][j]] = true;
          } else {
            result = false;
          }
        }
      }
    }
  }
};