/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
  let dp = {};

  for (let i = 0; i < A.length; i++) {
    A[i] = [A[i], i];
  }

  return helper(A);

  function helper(A) {
    let K = A[0][1] + '|' + A[A.length - 1][1];
    
    if (A.length < 3) return 0;
    if (dp[K]) return dp[K];

    dp[K] = Infinity;

    for (let i = 1; i < A.length - 1; i++) {
      dp[K] = Math.min(dp[K], A[0][0] * A[i][0] * A[A.length - 1][0] + helper(A.slice(0, i + 1)) + helper(A.slice(i)));
    }

    return dp[K];
  }
};