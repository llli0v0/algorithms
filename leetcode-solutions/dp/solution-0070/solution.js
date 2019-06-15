/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = { 0: 1, 1: 1 };
  helper(n);
  return dp[n];

  function helper(n) {
    if (n < 0) return 0;
    if (dp[n]) return dp[n];
    dp[n] = helper(n - 2) + helper(n - 1);
    return dp[n];
  }
};