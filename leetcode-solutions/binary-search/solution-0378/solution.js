/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let L = matrix[0][0];
  let R = matrix[matrix.length - 1][matrix[0].length - 1];

  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let c = 0;

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][matrix[i].length - 1] <= M) {
        c += matrix[i].length;
      } else {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] <= M) c++;
        }
      }
    }

    if (c < k) {
      L = M + 1;
    } else {
      R = M;
    }
  }

  return L;
};