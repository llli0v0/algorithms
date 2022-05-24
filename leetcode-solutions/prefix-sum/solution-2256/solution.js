/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
  let sum = nums.reduce((pre, cur) => pre + cur);
  let min = Infinity;
  let preSum = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    let a = Math.abs(Math.floor(preSum / (i + 1)) - (i === nums.length - 1 ? 0 : Math.floor((sum - preSum) / (nums.length - i - 1))));
    if (a < min) {
      min = a;
      result = i;
    }
  }
  return result;
};
