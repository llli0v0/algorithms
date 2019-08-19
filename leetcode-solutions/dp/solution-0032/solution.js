/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let dp = new Array(s.length).fill(0);
  dp[-1] = 0;

  let result = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === '(' && s[i] === ')') {
      dp[i] = dp[i - 2] + 2;
    } else if (s[i - dp[i - 1] - 1] === '(' && s[i] === ')') {
      dp[i] = dp[i - dp[i - 1] - 2] + dp[i - 1] + 2;
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};