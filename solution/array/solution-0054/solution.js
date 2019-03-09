/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let len = matrix.length * matrix[0].length, result = [];
  while (result.length < len) {
    result = result.concat(matrix.shift());
    for (let i = 0; i < matrix.length; i++) {
      result.push(matrix[i].pop());
    }
    if (matrix.length) result = result.concat(matrix.pop().reverse());
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length) result.push(matrix[i].shift());
    }
  }
  return result;
};

spiralOrder([[7],[9],[6]]);