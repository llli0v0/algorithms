/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] === 0) {
      for (let j = 0; j < A[i].length; j++) {
        if (A[i][j] === 0) {
          A[i][j] = 1;
        } else {
          A[i][j] = 0;
        }
      }
    }
  }
  for (let i = 1; i < A[0].length; i++) {
    let zcount = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] === 0) {
        zcount++;
      }
    }
    if (zcount > A.length / 2) {
      for (let j = 0; j < A.length; j++) {
        if (A[j][i] === 0) {
          A[j][i] = 1;
        } else {
          A[j][i] = 0;
        }
      }
    }
  }
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result = result + parseInt(A[i].join(''), 2);
  }
  return result;
};