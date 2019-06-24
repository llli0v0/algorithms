/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  if (!costs.length) return 0;
  let dp = new Array(costs.length).fill(null).map(() => []);
  dp[0] = costs[0];
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[i].length; j++) {
      dp[i].push(Infinity);
      for (let n = 0; n < dp[i - 1].length; n++) {
        if (n !== j) dp[i][j] = Math.min(dp[i][j], dp[i - 1][n] + costs[i][j]);
      }
    }
  }
  return Math.min(...dp[dp.length - 1]);
};