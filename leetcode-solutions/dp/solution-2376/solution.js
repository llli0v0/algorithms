/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function(n) {
  let s = String(n);
  let dp = {};
  let mod = 10**9 + 7;
  let res = 0;
  for (let i = 1; i <= s.length; i++) {
    if (i < s.length) {
      for (let j = 1; j < 10; j++) {
        res += helper(i - 1, 1 << j);
      }
    } else {
      for (let j = 1; j <= parseInt(s[0]); j++) {
        if (j === parseInt(s[0])) {
          res += helper(i - 1, 1 << j, s.slice(1));
        } else {
          res += helper(i - 1, 1 << j);
        }
      }
    }
    res %= mod;
  }
  return res;

  function helper(len, used, less = '') {
    if (len === 0) return 1;
    let key = `${len} ${used} ${less}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = 0;
    for (let i = 0; i < 10; i++) {
      if (((1 << i) & used) === 0) {
        if (less) {
          if (i === parseInt(less[0])) {
            dp[key] += helper(len - 1, used + (1 << i), less.slice(1));
          } else if (i < parseInt(less[0])) {
            dp[key] += helper(len - 1, used + (1 << i));
          }
        } else {
          dp[key] += helper(len - 1, used + (1 << i));
        }
        dp[key] %= mod;
      }
    }
    return dp[key];
  }
};
