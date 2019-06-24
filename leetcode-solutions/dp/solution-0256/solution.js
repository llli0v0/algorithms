/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  if (!costs.length) return 0;
  let dp = new Array(costs.length).fill(null).map(() => []);
  dp[0] = costs[0];
  for (let i = 1; i < costs.length; i++) {
    dp[i].push(Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0]);
    dp[i].push(Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1]);
    dp[i].push(Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2]);
  }
  return Math.min(...dp[dp.length - 1]);
};