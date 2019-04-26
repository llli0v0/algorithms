/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let dp = new Array(A[0].length).fill(1);
  for (let i = 1; i < A[0].length; i++) {
    for (let j = 0; j < i; j++) {
      if (A.every(n => n[j] <= n[i])) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  return A[0].length - Math.max(...dp);
};