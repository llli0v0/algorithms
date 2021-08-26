/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  let count = 0;
  let absMin = Infinity;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] <= 0) count++;
      absMin = Math.min(absMin, Math.abs(matrix[i][j]));
      sum += Math.abs(matrix[i][j]);
    }
  }
  if (count % 2) {
    return sum - absMin * 2;
  }
  return sum;
};