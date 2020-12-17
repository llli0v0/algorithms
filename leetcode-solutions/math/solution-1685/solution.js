/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  let sum = nums.reduce((a, b) => a + b);
  let presum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * i - presum + sum - presum - nums[i] * (nums.length - i));
    presum += nums[i];
  }
  return result;
};