/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  let sum = nums.reduce((pre, cur) => pre + cur);
  let preSum = 0;
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    preSum += nums[i];
    if (preSum >= sum - preSum) result++;
  }
  return result;
};