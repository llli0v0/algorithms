/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = {};

  dp[0] = s[0] === '*' ? 9 : s[0] === '0' ? 0 : 1;

  let B = 10**9 + 7;

  for (let i = 1; i < s.length; i++) {
    dp[i] = 0;

    let p = dp[i - 1];
    let q = dp[i - 2] === undefined ? 1 : dp[i - 2];

    if (s[i] === '*') {
      dp[i] += p * 9;

      if (s[i - 1] === '*') {
        dp[i] += q * 15;
      } else if (s[i - 1] === '1') {
        dp[i] += q * 9;
      } else if (s[i - 1] === '2') {
        dp[i] += q * 6;
      }
    } else if (s[i] === '0') {
      if (s[i - 1] === '0' || Number(s[i - 1]) > 2) continue;
      
      if (s[i - 1] === '*') {
        dp[i] = q * 2;
      } else {
        dp[i] = q;
      }
    } else {
      dp[i] += p;
      let n = Number(s[i]);

      if (n > 0 && n <= 6) {
        if (s[i - 1] === '1' || s[i - 1] === '2') {
          dp[i] += q;
        } else if (s[i - 1] === '*') {
          dp[i] += q * 2;
        }
      } else {
        if (s[i - 1] === '1' || s[i - 1] === '*') {
          dp[i] += q;
        }
      }
    }
    
    dp[i] %= B;
  }

  return dp[s.length - 1];
};