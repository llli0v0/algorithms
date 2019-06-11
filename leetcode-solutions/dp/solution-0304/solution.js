/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  let dp = new Array(matrix.length).fill(null).map(() => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < dp.length; i++) {
    let a = 0;
    for (let j = 0; j < dp[i].length; j++) {
      a += matrix[i][j];
      dp[i][j] = a + (dp[i - 1] === undefined ? 0 : dp[i - 1][j]);
    }
  }
  this.dp = dp;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.dp[row2][col2] - (this.dp[row2][col1 - 1] === undefined ? 0 : this.dp[row2][col1 - 1]) - (this.dp[row1 - 1] === undefined ? 0 : this.dp[row1 - 1][col2]) + (this.dp[row1 - 1] === undefined ? 0 : this.dp[row1 - 1][col1 - 1] === undefined ? 0 : this.dp[row1 - 1][col1 - 1]);
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */