/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
  let dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(false));
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; i + j <= s.length; j++) {
      if (i === 1) dp[j][j] = true;
      else if (i === 2) {
        if (s[j] === s[j + 1]) dp[j][j + 1] = true;
      } else {
        if (s[j] === s[j + i - 1] && dp[j + 1][j + i - 2]) dp[j][j + i - 1] = true;
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (dp[0][i]) {
      for (let j = i + 1; j < s.length; j++) {
        if (dp[i + 1][j] && dp[j + 1][s.length - 1]) return true;
      }
    }
  }
  return false;
};