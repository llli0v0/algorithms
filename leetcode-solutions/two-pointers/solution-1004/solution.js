/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let current = K, slidBlock = [], currentBest;
  while ((current || A[0] === 1) && A.length) {
    let head = A.shift();
    if (head === 0) current--;
    slidBlock.push(head);
  }
  currentBest = slidBlock.length;
  while (A.length) {
    if (A[0] === 0) {
      slidBlock.push(A.shift());
      while (A[0] === 1) slidBlock.push(A.shift());
      while (slidBlock[0] === 1) slidBlock.shift();
      slidBlock.shift();
    }
    if (slidBlock.length > currentBest) currentBest = slidBlock.length;
  }
  return currentBest;
};
