/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let result = 0;
  let matrix = new Array(A.length).fill(null).map(() => new Array(B.length).fill(0));
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        if (matrix[i - 1] && matrix[i - 1][j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
        } else {
          matrix[i][j] = 1;
        }
        if (matrix[i][j] > result) result = matrix[i][j];
      }
    }
  }
  return result;
};

findLength([1,0,0,0,1], [1,0,0,1,1]);