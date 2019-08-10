/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  let dp = {};
  let M = new Set();
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    M.add(A[i]);
    for (let j = 0; j < i; j++) {
      if (M.has(A[i] - A[j]) && A[i] - A[j] < A[j]) {
        let k = [A[j], A[i]].toString();
        dp[k] = (dp[[A[i] - A[j], A[j]].toString()] || 2) + 1;
        result = Math.max(result, dp[k]);
      }
    }
  }

  return result;
};