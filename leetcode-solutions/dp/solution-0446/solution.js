/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let dp = new Array(A.length).fill(null);
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    dp[i] = [{}, {}];
    for (let j = 0; j < i; j++) {
      let key = A[i] - A[j];
      // case1: If the preceding element has an arithmetic sequence of the same difference,
      // the current element stores the value, and result+
      if (dp[j][1][key] !== undefined) {
        if (dp[i][1][key] === undefined) dp[i][1][key] = 0;
        dp[i][1][key] += dp[j][1][key];
        result += dp[j][1][key];
      }
      // case2: If two of the preceding elements have an arithmetic difference,
      // dp[i][1] stores the value, result+
      if (dp[j][0][key] !== undefined) {
        if (dp[i][1][key] === undefined) dp[i][1][key] = 0;
        dp[i][1][key] += dp[j][0][key];
        result += dp[j][0][key];
      }
      // Whatever the difference is, dp[i][0] stores the value
      if (dp[i][0][key] === undefined) dp[i][0][key] = 0;
      dp[i][0][key] += 1;
    }
  }
  return result;
};