/**
 * @param {number[]} nums
 * @param {number} K
 * @return {boolean}
 */
var canDivideIntoSubsequences = function(nums, K) {
  let A = [[nums[0], 1]];
  let M = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === A[A.length - 1][0]) {
      A[A.length - 1][1] += 1;
    } else {
      A.push([nums[i], 1]);
    }

    M = Math.max(M, A[A.length - 1][1]);
  }

  return M * K <= nums.length;
};