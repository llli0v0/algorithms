/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let cd = {};
  let result = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = C[i] + D[j];
      if (cd[sum] === undefined) {
        cd[sum] = 0;
      }
      cd[sum]++;
    }
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j];
      if (cd[0 - sum]) {
        result = result + cd[0 - sum];
      }
    }
  }
  return result;
};