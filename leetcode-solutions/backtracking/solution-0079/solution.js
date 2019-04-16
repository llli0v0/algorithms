/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let result = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      search(i, j, {}, 0);
    }
  }
  return result;
  function search(x, y, way, p) {
    if (result) return;
    if (board[x] === undefined || board[x][y] === undefined) return;
    if (way[x + '_' + y]) return;
    if (board[x][y] !== word[p]) return;
    if (p === word.length - 1) result = true;
    way[x + '_' + y] = true;
    search(x - 1, y, JSON.parse(JSON.stringify(way)), p + 1);
    search(x + 1, y, JSON.parse(JSON.stringify(way)), p + 1);
    search(x, y + 1, JSON.parse(JSON.stringify(way)), p + 1);
    search(x, y - 1, JSON.parse(JSON.stringify(way)), p + 1);
  }
};