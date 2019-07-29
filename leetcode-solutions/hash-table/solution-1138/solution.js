/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  let board = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'z'];

  let M = {};
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      M[board[i][j]] = [i, j];
    }
  }

  let C = [0, 0];

  let result = '';

  for (let i = 0; i < target.length; i++) {
    if (board[C[0]][C[1]] !== target[i]) {
      let x = M[target[i]][1] - C[1];
      let y = M[target[i]][0] - C[0];

      if (y > 0) {
        if (x > 0) {
          result += new Array(x).fill('R').join('');
        } else {
          result += new Array(-x).fill('L').join('');
        }
        result += new Array(y).fill('D').join('');
      } else {
        result += new Array(-y).fill('U').join('');
        if (x > 0) {
          result += new Array(x).fill('R').join('');
        } else {
          result += new Array(-x).fill('L').join('');
        }
      }
    }

    result += '!';
    C = M[target[i]];
  }

  return result;
};