/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
  let dp = {};
  let mod = 10**9 + 7;
  return helper(s.length - 1);

  function helper(index) {
    if (index === -1) return 1;
    if (dp[index] !== undefined) return dp[index];
    dp[index] = 0;
    for (let i = index - 9; i <= index; i++) {
      if (s[i] !== '0') {
        let num = parseInt(s.slice(i, index + 1));
        if (num <= k) {
          dp[index] = (dp[index] + helper(i - 1)) % mod;
        }
      }
    }
    return dp[index];
  }
};