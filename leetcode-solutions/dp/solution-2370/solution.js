/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
  let dp = {};
  let res = 1;
  for (let i = 0; i < s.length; i++) {
    let a = s[i].charCodeAt();
    let b = 'a'.charCodeAt();
    let c = 'z'.charCodeAt();
    let max = 0;
    for (let j = b; j <= c; j++) {
      if (Math.abs(a - j) <= k) {
        max = Math.max(max, 1 + (dp[j] || 0));
      }
    }
    dp[a] = Math.max(max, (dp[a] || 0));
    res = Math.max(res, dp[a]);
  }
  return res;
};
