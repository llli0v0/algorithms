/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var waysToDistribute = function(n, k) {
  let dp = {};
  let mod = 10**9 + 7;
  return helper(n, k);

  function helper(n, k) {
    if (n === k) return 1;
    else if (n === 0 || k === 0) return 0;
    let key = `${n} ${k}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = (k * helper(n - 1, k) + helper(n - 1, k - 1)) % mod;
    return dp[key];
  }
};
