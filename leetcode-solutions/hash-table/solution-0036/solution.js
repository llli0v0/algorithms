/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let a = new Array(board[0].length).fill(0);
  let b = new Array(3).fill(null).map(() => new Array(3).fill(0));

  for (let i = 0; i < board.length; i++) {
    let c = 0;

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        let d = 1 << board[i][j];

        if ((d & a[j]) === d) return false;

        let x = Math.floor(i / 3);
        let y = Math.floor(j / 3);
        if ((d & b[x][y]) === d) return false;

        if ((d & c) === d) return false;

        a[j] += d;
        b[x][y] += d;
        c += d;
      }
    }
  }

  return true;
}