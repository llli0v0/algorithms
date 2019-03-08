/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let matrix = new Array(n).fill(null).map(() => new Array(m).fill(null));
  for (let i = 0; i < n; i++) {
    matrix[i][0] = 1;
  }
  for (let i = 0; i < m; i++) {
    matrix[0][i] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  return matrix[n - 1][m - 1];
};

console.log(uniquePaths(51, 9));