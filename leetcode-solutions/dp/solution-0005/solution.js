/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return s;

  let dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(0));

  let result = s[0];

  for (let i = 0; i < dp.length; i++) dp[i][i] = 1;

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j + i < s.length; j++) {
      if (s[j] === s[j + i]) {
        if (dp[j + 1][j + i - 1] || i === 1) {
          dp[j][j + i] = i + 1;
          result = i + 1 > result.length ? s.slice(j, j + i + 1) : result;
        }
      }
    }
  }

  return result;
};