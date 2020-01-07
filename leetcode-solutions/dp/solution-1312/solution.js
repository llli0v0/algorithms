/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  let dp = {};

  return helper(0, s.length - 1);

  function helper(l, r) {
    if (l >= r) return 0;

    let k = [l, r].toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = 1 + helper(l + 1, r);

    for (let i = r; i > l; i--) {
      if (s[l] === s[i]) {
        dp[k] = Math.min(dp[k], r - i + helper(l + 1, i - 1));
        break;
      }
    }

    return dp[k];
  }
};