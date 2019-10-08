/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
  let S = s;
  let dp = {};

  return s.length - helper(0, s.length - 1) <= k;

  function helper(s, e) {
    if (s === e) return 1;
    if (s > e) return 0;

    let k = [s, e].toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = 1;

    if (S[s] === S[e]) dp[k] = helper(s + 1, e - 1) + 2;

    dp[k] = Math.max(dp[k], helper(s, e - 1), helper(s + 1, e));

    return dp[k];
  }
};