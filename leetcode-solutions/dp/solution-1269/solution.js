/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  let mod = 10 ** 9 + 7;
  let dp = {};

  return helper(0, steps);

  function helper(cur, s) {
    if (s === 1) {
      if (cur - 0 === 0 || cur - 0 === 1) return 1;
      return 0;
    }

    let k = [cur, s].toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = (helper(cur, s - 1) % mod + (cur > 0 ? helper(cur - 1, s - 1) : 0) % mod + (cur < arrLen - 1 ? helper(cur + 1, s - 1) : 0) % mod) % mod;

    return dp[k];
  }
};