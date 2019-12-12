/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        matrix[i][j] = Math.min(matrix[i - 1] ? matrix[i - 1][j] : 0, matrix[i][j - 1] ? matrix[i][j - 1] : 0, matrix[i - 1] ? (matrix[i - 1][j - 1] ? matrix[i - 1][j - 1] : 0) : 0) + 1;
        result += matrix[i][j];
      }
    }
  }

  return result;
};