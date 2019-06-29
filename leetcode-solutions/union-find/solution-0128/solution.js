/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let A = {};
  let V = new Set();
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    if (V.has(c)) continue;
    V.add(c);
    if (A[c - 1] && A[c + 1]) {
      let a = A[c - 1].concat([c]).concat(A[c + 1]);
      delete A[c - 1];
      delete A[c + 1];
      A[a[0]] = a;
      A[a[a.length - 1]] = a;
    } else if (A[c - 1]) {
      let a = A[c - 1].concat([c]);
      delete A[c - 1];
      A[c] = a;
      A[a[0]] = a;
    } else if (A[c + 1]) {
      let a = [c].concat(A[c + 1]);
      delete A[c + 1];
      A[c] = a;
      A[a[a.length - 1]] = a;
    } else {
      A[c] = [c];
    }
  }
  let result = 0;
  for (let k in A) {
    result = Math.max(result, A[k].length);
  }
  return result;
};