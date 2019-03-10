/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  let result1 = -1, result2 = -1, result3 = -1, result4 = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[0] || B[i] === A[0]) {
      if (result1 === -1) result1 = 0;
      if (result3 === -1) result3 = 0;
      if (A[i] !== A[0]) result1++;
      if (B[i] !== A[0]) result3++;
    } else {
      result1 = -1;
      result3 = -1;
      break;
    }
  }
  for (let i = 0; i < B.length; i++) {
    if (B[i] === B[0] || A[i] === B[0]) {
      if (result2 === -1) result2 = 0;
      if (result4 === -1) result4 = 0;
      if (B[i] !== B[0]) result2++;
      if (A[i] !== B[0]) result4++;
    } else {
      result2 = -1;
      result4 = -1;
      break;
    }
  }
  if (result1 === -1 && result2 === -1 && result3 === -1 && result4 === -1) return -1;
  return Math.min(
    result1 === -1 ? Infinity : result1,
    result2 === -1 ? Infinity : result2,
    result3 === -1 ? Infinity : result3, 
    result4 === -1 ? Infinity : result4,
    A.length - result1,
    A.length - result2,
    A.length - result3,
    A.length - result4
  );
};
