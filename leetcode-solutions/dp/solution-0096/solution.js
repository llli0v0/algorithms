/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = new Array(n + 1);

  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    helper(i);
  }

  return dp[n];

  function helper(a) {
    if (dp[a] !== undefined) return dp[a];

    dp[a] = 0;

    for (let i = 1; i <= a; i++) {
      dp[a] += (helper(i - 1) || 1) * (helper(a - i) || 1);
    }

    return dp[a];
  }
};