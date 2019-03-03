/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let current = K, window = [], currentBest;
  while ((current || A[0] === 1) && A.length) {
    let head = A.shift();
    if (head === 0) current--;
    window.push(head);
  }
  currentBest = window.length;
  while (A.length) {
    if (A[0] === 0) {
      window.push(A.shift());
      while (A[0] === 1) window.push(A.shift());
      while (window[0] === 1) window.shift();
      window.shift();
    }
    if (window.length > currentBest) currentBest = window.length;
  }
  return currentBest;
};
