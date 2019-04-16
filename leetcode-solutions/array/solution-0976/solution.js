/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a, b) => a - b);
  while (A.length >= 3) {
    let a = A[A.length - 1];
    let b = A[A.length - 2];
    let c = A[A.length - 3];
    if (b + c > a) return a + b + c;
    A.pop();
  }
  return 0;
};