/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
  let dp = { '-1': 0 };
  for (let i = 0; i < A.length; i++) {
    let a = A[i]
    dp[i] = 0;
    for (let j = i; j >= 0 && j > i - K; j--) {
      if (a < A[j]) a = A[j];
      dp[i] = Math.max(dp[i], a * (i - j + 1) + dp[j - 1]);
    }
  }
  return dp[A.length - 1];
};