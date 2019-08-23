/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let result = 0;

  helper(nums);

  return result;

  function helper(nums) {
    if (nums.length < 2) return nums;

    let M = Math.floor(nums.length / 2);

    let L = helper(nums.slice(0, M));
    let R = helper(nums.slice(M));

    let p1 = 0;
    let p2 = 0;

    while (p1 < L.length && p2 < R.length) {
      if (L[p1] / 2 > R[p2]) {
        result += R.length - p2;
        p1++;
      } else {
        p2++;
      }
    }

    let N = [];
    
    while (L.length && R.length) {
      if (L[0] > R[0]) {
        N.push(L.shift());
      } else {
        N.push(R.shift());
      }
    }

    N = N.concat(L.length ? L : R);

    return N;
  }
};