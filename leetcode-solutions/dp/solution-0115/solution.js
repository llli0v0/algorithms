/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  if (!s || !t) return 0;

  let dp = new Array(t.length).fill(null).map(() => new Array(s.length).fill(0));

  if (s[0] === t[0]) dp[0][0] = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === t[0]) {
      dp[0][i] = dp[0][i - 1] + 1;
    } else {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (let i = 1; i < t.length; i++) {
    for (let j = 1; j < s.length; j++) {
      if (t[i] === s[j]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
};