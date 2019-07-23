/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = { '-1': 0, 0: 1, 1: 1 };

  helper(n);

  return dp[n];

  function helper(n) {
    if (dp[n] !== undefined) return dp[n];

    dp[n] = helper(n - 2) + helper(n - 1);

    return dp[n];
  }
};