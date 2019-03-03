/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let current = K, window = [], currentBest;
  let times = 0;
  while ((current || A[0] === 1) && A.length) {
    let top;
    if ((top = A.shift()) === 0) current--;
    window.push(top);
  }
  currentBest = window.length;
  while (A.length) {
    if (A[0] === 0) {
      window.push(A.shift());
      while (A[0] === 1) window.push(A.shift());
      while (window[0] === 1) window.shift();
      window.shift();
    }
    console.log(window.length);
    if (window.length > currentBest) currentBest = window.length;
  }
  return currentBest;
};
