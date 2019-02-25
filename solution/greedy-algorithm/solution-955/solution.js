/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let current = new Array(A.length).fill(''), ans = 0, next = [];
  for (let i = 0; i < A[0].length; i++) {
    next = [...current];
    next[0] += A[0][i];
    for (let j = 1; j < A.length; j++) {
      next[j] += A[j][i];
      if (next[j] < next[j - 1]) {
        ans++;
        break;
      }
      if (j === A.length - 1) current = [...next];
    }
  }
  return ans;
};

console.log(minDeletionSize(["ca","bb","ac"]));