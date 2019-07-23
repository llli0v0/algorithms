/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = grid;

  for (let i = 1; i < dp.length; i++) dp[i][0] += dp[i - 1][0];
  for (let i = 1; i < dp[0].length; i++) dp[0][i] += dp[0][i - 1];

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};