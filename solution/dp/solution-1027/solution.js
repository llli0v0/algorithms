/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  let dp = { 0: {} };
  let result = 1;
  for (let i = 0; i < A.length; i++) dp[i] = {};
  for (let i = 1; i < A.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let key = A[i] - A[j];
      if (dp[i][key] === undefined) dp[i][key] = 2;
      if (dp[j][key]) {
        dp[i][key] = Math.max(dp[i][key], dp[j][key] + 1);
      }
      result = Math.max(result, dp[i][key]);
    }
  }
  return result;
};

longestArithSeqLength([9, 6, 4, 2, 4, 6, 8, 4, 2, 9]);