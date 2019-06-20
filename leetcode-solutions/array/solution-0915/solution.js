/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
  let S = new Array(A.length).fill(null).map(() => [0, 0]);
  let a = 0
  for (let i = 0; i < A.length; i++) {
    a = Math.max(a, A[i]);
    S[i][0] = a;
  }
  let b = Infinity;
  for (let i = A.length - 1; i >= 0; i--) {
    b = Math.min(b, A[i]);
    S[i][1] = b;
  }
  for (let i = 0; i < S.length; i++) {
    if (S[i + 1][1] >= S[i][0]) return i + 1;
  }
};