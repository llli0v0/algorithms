/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let m = 0; m < matrix.length; m++) {
          if (matrix[m][j] !== 0) matrix[m][j] = '.';
        }
        for (let n = 0; n < matrix[i].length; n++) {
          if (matrix[i][n] !== 0) matrix[i][n] = '.';
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '.') matrix[i][j] = 0;
    }
  }
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);