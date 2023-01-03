/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
  let dp = { '-1': 0 };
  for (let i = 0; i < s.length; i++) {
    dp[i] = Infinity;
    for (let j = i; j >= 0 && i - j <= 8; j--) {
      if (parseInt(s.slice(j, i + 1)) <= k) {
        dp[i] = Math.min(dp[i] ?? Infinity, dp[j - 1] + 1);
      }
    }
  }
  return dp[s.length - 1] > 10**5 ? -1 : dp[s.length - 1];
};
