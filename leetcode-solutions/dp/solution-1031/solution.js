/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  let lsum = {};
  let lbest = {};
  for (let i = L - 1; i < A.length; i++) {
    lbest[i] = -Infinity;
  }
  getSumAndBest(A, L, lsum, lbest);
  let msum = {};
  let mbest = {};
  for (let i = M - 1; i < A.length; i++) {
    mbest[i] = -Infinity;
  }
  getSumAndBest(A, M, msum, mbest);
  let result = -Infinity;
  for (let i = L + M - 1; i < A.length; i++) {
    result = Math.max(lsum[i] + mbest[i - L], result, msum[i] + lbest[i - M]);
  }
  return result;
  function getSumAndBest(target, len, result, best) {
    let init = 0;
    for (let i = 0; i < len; i++) {
      init += target[i];
    }
    result[len - 1] = init;
    best[len - 1] = init;
    for (let i = len; i < target.length; i++) {
      result[i] = result[i - 1] + target[i] - target[i - len];
      best[i] = Math.max(best[i - 1], result[i]);
    }
  }
};

maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2);