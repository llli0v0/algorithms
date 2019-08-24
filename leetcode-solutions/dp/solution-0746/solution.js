/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = {};

  return helper(cost.length);

  function helper(s) {
    if (s < 0) return 0;

    if (dp[s] !== undefined) return dp[s];

    dp[s] = Math.min(
      helper(s - 1) + (cost[s - 1] === undefined ? 0 : cost[s - 1]),
      helper(s - 2) + (cost[s - 2] === undefined ? 0 : cost[s - 2])
    );

    return dp[s];
  }
};