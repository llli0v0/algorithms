/**
 * @param {number[]} A
 * @return {number}
 */
/**
 * 这个需要优化 
 */
var minScoreTriangulation = function(A) {
  let dp = {};
  helper(A);
  return dp[A.join()];

  function helper(A) {
    let k = A.join();
    if (dp[k]) return dp[k];
    if (A.length < 3) return 0;
    if (A.length === 3) {
      dp[k] = A[0] * A[1] * A[2];
    } else {
      dp[k] = Infinity;
      for (let i = 1; i < A.length; i++) {
        dp[k] = Math.min(dp[k],
          A[0] * A[i] * A[1] + helper(A.slice(1, i + 1)) + helper([A[0]].concat(A.slice(i))),
          A[0] * A[i] * A[i - 1] + helper(A.slice(0, i)) + helper([A[0]].concat(A.slice(i))));
      }
    }
    return dp[k]
  }
};