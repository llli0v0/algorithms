/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
/**
 * 回顾一下 没什么可解释的所以我把注释删掉了
 */
var maxUncrossedLines = function(A, B) {
  let dp = {};
  return helper(A, B);

  function helper(A, B) {
    let k = A.length + ' ' + B.length;
    if (dp[k] !== undefined) return dp[k];
    dp[k] = 0;
    if (!A.length || !B.length) return 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
        if (A[i] === B[j]) {
          dp[k] = Math.max(dp[k], 1 + helper(A.slice(i + 1), B.slice(j + 1)), helper(A.slice(i + 1), B));
          return dp[k];
        }
      }
    }
    return 0;
  }
};