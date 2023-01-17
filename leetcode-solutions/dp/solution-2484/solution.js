/**
 * @param {string} s
 * @return {number}
 */
var countPalindromes = function(s) {
  let dp = new Array(s.length).fill(null).map(() => {
    let o = {};
    for (let i = 0; i <= 9; i++) o[i] = 0;
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) o[String(i) + String(j)] = 0;
    }
    return o;
  });
  let mod = 10**9 + 7;
  dp[0][s[0]] = 1;
  for (let i = 1; i < s.length; i++) {
    for (let m = 0; m <= 9; m++) {
      dp[i][m] = dp[i - 1][m] + (s[i] === String(m) ? 1 : 0);
      for (let n = 0; n <= 9; n++) {
        let key = String(m) + String(n);
        if (String(n) === s[i]) {
          dp[i][key] = (dp[i - 1][key] + dp[i - 1][m]) % mod;
        } else {
          dp[i][key] = dp[i - 1][key];
        }
      }
    }
  }
  let res = 0;
  for (let i = 2; i < s.length - 2; i++) {
    for (let key in dp[i]) {
      if (key.length === 2) {
        let key1 = key[1] + key[0];
        let b = (dp[s.length - 1][key1] - dp[i][key1] - dp[i][key1[0]] * (dp[s.length - 1][key1[1]] - dp[i][key1[1]]) % mod + mod) % mod;
        res = (res + dp[i - 1][key] * b) % mod;
      }
    }
  }
  return res;
};
