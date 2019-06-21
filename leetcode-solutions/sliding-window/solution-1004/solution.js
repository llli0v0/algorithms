/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let S = [];
  let k = K;
  let result = 0;
  if (K === 0) {
    let a = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i]) {
        a += 1;
      } else {
        result = Math.max(result, a);
        a = 0;
      }
    }
    result = Math.max(result, a);
    return result;
  }
  while (A.length) {
    while (A.length && k > 0 || A[0] === 1) {
      let a = A.shift();
      S.push(a);
      if (a === 0) k -= 1;
    }
    result = Math.max(result, S.length);
    while (S.shift() === 1) {}
    k += 1;
  }
  return result;
};