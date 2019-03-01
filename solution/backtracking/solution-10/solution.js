/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let matrix = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(null));
  matrix[0][0] = true;
  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] = false;
  }
  for (let i = 1; i < p.length + 1; i++) {
    if (p[i - 1] !== '*') {
      matrix[0][i] = false;
      continue;
    }
    if (p[i - 1] === '*') {
      matrix[0][i] = matrix[0][i - 2];
    }
  }
  for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 1; colIndex < p.length + 1; colIndex++) {
      if (p[colIndex - 1] === '*') {
        if (
          matrix[rowIndex][colIndex - 1] || matrix[rowIndex][colIndex - 2] ||
          (matrix[rowIndex - 1][colIndex] && (s[rowIndex - 1] === p[colIndex - 2] || p[colIndex - 2] === '.'))
        ) {
          matrix[rowIndex][colIndex] = true;
        } else {
          matrix[rowIndex][colIndex] = false;
        }
      } else if (
        (s[rowIndex - 1] === p[colIndex - 1] || p[colIndex - 1] === '.') &&
        matrix[rowIndex - 1][colIndex - 1]
      ) {
        matrix[rowIndex][colIndex] = true;
      } else {
        matrix[rowIndex][colIndex] = false;
      }
    }
  }
  return matrix[s.length][p.length];
};