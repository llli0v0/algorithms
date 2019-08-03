/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let dp = {};
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  return helper(n);

  function helper(n) {
    if (dp[n] !== undefined) return dp[n];

    dp[n] = helper(n - 1) + helper(n - 2) + helper(n - 3);

    return dp[n];
  }
};