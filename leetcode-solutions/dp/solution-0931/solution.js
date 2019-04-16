/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  for (let i = A.length - 2; i >= 0; i--) {
    for (let j = 0; j < A[0].length; j++) {
      A[i][j] = Math.min(A[i + 1][j - 1] === undefined ? Infinity : A[i + 1][j - 1], A[i + 1][j], A[i + 1][j + 1] === undefined ? Infinity : A[i + 1][j + 1]) + A[i][j];
    }
  }
  return Math.min(...A[0]);
};