/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  let dp = {};
  return helper(0);

  function helper(idx) {
    if (idx >= questions.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];
    dp[idx] = Math.max(questions[idx][0] + helper(idx + questions[idx][1] + 1), helper(idx + 1));
    return dp[idx];
  }
};
