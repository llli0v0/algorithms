/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let dp = {};
  let result = 0;
  for (let i = 1; i < n; i++) {
    result = Math.max(result, helper(i) * helper(n - i));
  }
  return result;

  function helper(n) {
    if (n <= 1) return 1;
    if (dp[n] !== undefined) return dp[n];
    let a = n;
    for (let i = 1; i < n; i++) {
      a = Math.max(a, helper(i) * helper(n - i));
    }
    dp[n] = a;
    return a;
  }
};