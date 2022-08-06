/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0];
  let preSum = nums[0];
  let minPre = Math.min(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    preSum += nums[i];
    res = Math.max(res, preSum - minPre);
    minPre = Math.min(minPre, preSum);
  }
  return res;
};
