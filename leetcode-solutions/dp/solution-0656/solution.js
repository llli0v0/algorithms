/**
 * @param {number[]} A
 * @param {number} B
 * @return {number[]}
 */
var cheapestJump = function(A, B) {
  if (!A.length) return [];
  if (A.length === 1) return [1];
  let dp = new Array(A.length).fill(null).map(() => [void 0, []]);
  dp[0] = [A[0], 0];
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j <= i + B && j < A.length; j++) {
      if (A[i] === -1 || A[j] === -1 || dp[i][0] === undefined) continue;
      if (dp[j][0] === undefined || dp[j][0] > dp[i][0] + A[j]) {
        dp[j] = [dp[i][0] + A[j], [i + 1]];
      } else if (dp[j][0] === dp[i][0] + A[j]) {
        dp[j][1].push(i + 1);
      }
    }
  }
  if (!dp[A.length - 1][1].length) return [];
  let result = [];
  helper(dp[A.length - 1][1], ' ' + A.length);
  result.sort((a, b) => {
    let l = Math.min(a.length, b.length);
    for (let i = 0; i < l; i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return a.length < b.length ? -1 : 1;
  });
  return result[0];

  function helper(M, S) {
    if (M === 0) result.push(S.trim().split(' ').map(i => parseInt(i)));
    for (let i = 0; i < M.length; i++) {
      helper(dp[M[i] - 1][1], ' ' + M[i] + S);
    }
  }
};