/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
  let times = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) continue;
    if (K + i > A.length) return -1;
    times++;
    for (let j = i; j < K + i; j++) {
      if (A[j] === 0) {
        A[j] = 1;
      } else {
        A[j] = 0;
      }
    }
  }
  return times;
};