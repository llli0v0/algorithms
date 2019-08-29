/**
 * @param {number[]} nums
 * @param {number} K
 * @return {boolean}
 */
var canDivideIntoSubsequences = function(nums, K) {
  let M = 1;
  let N = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      M++;
    } else {
      M = 1;
    }

    N = Math.max(M, N);
  }

  return N * K <= nums.length;
};