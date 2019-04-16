/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = new Array(n).fill(null).map(() => new Array(n).fill(null)), times = n ** 2, P = n ** 2, level = 0;
  while (times) {
    for (let i = level; i < matrix[0].length - 1 - level; i++) {
      times--;
      matrix[level][i] = P - times;
    }
    for (let i = level; i < matrix.length - 1 - level; i++) {
      times--;
      matrix[i][matrix[0].length - 1 - level] = P - times;
    }
    for (let i = matrix[0].length - 1 - level; i >= level + 1; i--) {
      times--;
      matrix[matrix.length - 1 - level][i] = P - times;
    }
    for (let i = matrix.length - 1 - level; i >= level + 1; i--) {
      times--;
      matrix[i][level] = P - times;
    }
    if (times === 1) {
      matrix[Math.floor(n / 2)][Math.floor(n / 2)] = P;
      times--;
    }
    level++;
  }
  return matrix;
};

console.log(generateMatrix(6));