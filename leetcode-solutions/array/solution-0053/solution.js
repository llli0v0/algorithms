/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = -Infinity;

  let s = 0;

  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    result = Math.max(result, s);
    if (s < 0) s = 0;
  }

  return result;
};