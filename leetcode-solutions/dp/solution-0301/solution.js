/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  if (!s) return [''];

  let dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(null));

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === ')') {
      dp[i][i] = [''];
    } else {
      dp[i][i] = [s[i]];
    }
  }

  for (let i = 0; i + 1 < s.length; i++) {
    if (s[i] === '(' && s[i + 1] === ')') {
      dp[i][i + 1] = ['()'];
    } else {
      dp[i][i + 1] = [''];
      if (s[i] !== '(' && s[i] !== ')') dp[i][i + 1][0] += s[i];
      if (s[i + 1] !== '(' && s[i + 1] !== ')') dp[i][i + 1][0] += s[i + 1];
    }
  }

  for (let i = 2; i < s.length; i++) {
    for (let j = 0; j + i < s.length; j++) {
      if (s[j] === '(' && s[j + i] === ')') {
        dp[j][j + i] = [...dp[j + 1][j + i - 1]].map(item => '(' + item + ')');
      } else {
        dp[j][j + i] = [...dp[j + 1][j + i - 1]];
      }

      if (s[j] !== '(' && s[j] !== ')') {
        for (let n = 0; n < dp[j][j + i].length; n++) dp[j][j + i][n] = s[j] + dp[j][j + i][n];
      }
      if (s[j + i] !== '(' && s[j + i] !== ')') {
        for (let n = 0; n < dp[j][j + i].length; n++) dp[j][j + i][n] += s[j + i];
      }

      for (let n = j; n < j + i; n++) {
        if (dp[j][n][0].length + dp[n + 1][j + i][0].length >= dp[j][j + i][0].length) {
          if (dp[j][n][0].length + dp[n + 1][j + i][0].length > dp[j][j + i][0].length) dp[j][j + i] = [];

          let a = dp[j][n];
          let b = dp[n + 1][j + i];

          for (let p = 0; p < a.length; p++) {
            for (let q = 0; q < b.length; q++) {
              dp[j][j + i].push(a[p] + b[q]);
            }
          }
        }
      }

      dp[j][j + i] = Array.from(new Set(dp[j][j + i]))
    }
  }

  return dp[0][dp.length - 1];
};