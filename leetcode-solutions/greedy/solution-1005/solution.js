/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  A = A.sort((a, b) => a - b);
  let count = 0, sum = 0, index = 0, min = Infinity;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) count++;
    sum += A[i];
    if (Math.abs(A[i]) < min) min = Math.abs(A[i]);
  }
  while (count && K) {
    sum = sum + (-A[index]) * 2;
    count--;
    K--;
    index++;
  }
  if (K) return sum - min + Math.pow(-1, K) * min;
  return sum;
};