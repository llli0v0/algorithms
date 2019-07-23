/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let dp = obstacleGrid;

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (dp[i][j]) dp[i][j] = -1;
    }
  }

  dp[0][0] = dp[0][0] === -1 ? -1 : 1;

  for (let i = 1; i < dp.length; i++) {
    if (dp[i - 1][0] === 1 && dp[i][0] !== -1) dp[i][0] = 1;
  }

  for (let i = 1; i < dp[0].length; i++) {
    if (dp[0][i - 1] === 1 && dp[0][i] !== -1) dp[0][i] = 1;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (dp[i][j] !== -1) {
        dp[i][j] = (dp[i - 1][j] === -1 ? 0 : dp[i - 1][j]) + (dp[i][j - 1] === -1 ? 0 : dp[i][j - 1]);
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1] === -1 ? 0 : dp[dp.length - 1][dp[0].length - 1];
};