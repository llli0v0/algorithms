/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  for (let i = 0; i < A.length; i++) {
    A[i] = { val: A[i] };
  }
  helper(L, 'L');
  helper(M, 'M');
  let result = 0;
  for (let i = L + M - 1; i < A.length; i++) {
    result = Math.max(result, A[i].nerL + A[i - L].maxM, A[i].nerM + A[i - M].maxL);
  }
  return result;
  function helper(len, sign) {
    let currentMax = 0;
    let currentS = 0;
    for (let i = 0; i < len; i++) {
      currentMax += A[i].val;
      currentS += A[i].val;
    }
    A[len - 1]['max' + sign] = currentMax;
    A[len - 1]['ner' + sign] = currentS;
    for (let i = len; i < A.length; i++) {
      A[i]['ner' + sign] = A[i - 1]['ner' + sign] - A[i - len].val + A[i].val;
      A[i]['max' + sign] = Math.max(A[i]['ner' + sign], A[i - 1]['max' + sign]);
    }
  }
};