/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s[0] === '0') return 0;

  let dp = new Array(s.length).fill(0);

  dp[-1] = 1;
  dp[0] = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '0') {
      dp[i] = s[i - 1] === '1' || s[i - 1] === '2' ? dp[i - 2] : 0;
    } else {
      dp[i] = dp[i - 1];

      if (s[i - 1] === '1' || s[i - 1] === '2' && s[i] <= '6') dp[i] += dp[i - 2];
    }
  }

  return dp[dp.length - 1];
};