/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  // 当行数远大于列数时 先旋转矩阵
  if (matrix.length / matrix[0].length > 10) matrix = helper(matrix);
  let A = [];
  let dp = {};
  let c = new Array(matrix[0].length).fill(0);
  dp[-1] = [...c];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      c[j] += matrix[i][j];
    }
    dp[i] = [...c];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = -1; j < i; j++) {
      let a = [];
      for (let m = 0; m < matrix[i].length; m++) {
        a.push(dp[i][m] - dp[j][m]);
      }
      A.push(a);
    }
  }
  let result = -Infinity;
  for (let i = 0; i < A.length; i++) {
    let a = A[i];
    let dp = {}
    let t = 0;
    a.unshift(0);
    for (let j = 0; j < a.length; j++) {
      t += a[j];
      dp[j] = t;
    }
    for (let m = 0; m < a.length; m++) {
      for (let n = 0; n < m; n++) {
        let r = dp[m] - dp[n];
        if (r <= k) result = Math.max(result, r);
      }
    }
  }
  return result;

  function helper(matrix) {
    let A = new Array(matrix[0].length).fill(null).map(() => []);
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        A[i].push(matrix[j][i]);
      }
    }
    return A;
  };
};