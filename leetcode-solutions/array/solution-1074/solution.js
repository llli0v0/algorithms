/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let a = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      a += matrix[i][j];
      matrix[i][j] = a;
    }
  }
  let A = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= i; j++) {
      A.push(helper(j, i));
    }
  }
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    for (let m = 0; m < A[i].length; m++) {
      if (A[i][m] === target) result++;
      for (let n = 0; n < m; n++) {
        if (A[i][m] - A[i][n] === target) result++;
      }
    }
  }
  return result;

  function helper(j, i) {
    let a = [];
    for (let m = 0; m < matrix[i].length; m++) {
      let b = 0;
      for (let n = j; n < i + 1; n++) {
        b += matrix[n][m];
      }
      a.push(b);
    }
    return a;
  }
};