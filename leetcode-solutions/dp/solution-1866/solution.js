/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
  let dp = {};
  let mod = 10n**9n + 7n;
  return helper(n, k);

  function helper(n, k) {
    if (n === k) return 1n;
    else if (k <= 0) return 0n;
    let key = `${n} ${k}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = (helper(n - 1, k - 1) + helper(n - 1, k) * BigInt(n - 1)) % mod;
    return dp[key];
  }
};
