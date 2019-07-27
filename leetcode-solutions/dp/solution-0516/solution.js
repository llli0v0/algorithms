/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  if (!s) return 0;

  let dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(0));

  let result = 1;

  for (let i = 0; i < s.length; i++) dp[i][i] = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 2;
      result = 2;
    } else {
      dp[i][i + 1] = 1;
    }
  }

  for (let i = 2; i < s.length; i++) {
    for (let j = 0; j + i < s.length; j++) {
      if (s[j] === s[j + i]) {
        dp[j][j + i] = dp[j + 1][j + i - 1] + 2;
      } else {
        dp[j][j + i] = Math.max(dp[j + 1][j + i], dp[j][j + i - 1]);
      }

      result = Math.max(result, dp[j][j + i]);
    }
  }

  return result;
};