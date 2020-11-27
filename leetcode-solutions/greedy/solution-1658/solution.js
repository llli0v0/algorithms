/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  let sum = 0;
  let preSum = { 0: -1 };
  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    preSum[sum] = i;
    if (sum === x) result = i + 1;
  }
  sum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    sum += nums[i];
    if (preSum[x - sum] !== undefined && preSum[x - sum] < i) {
      result = Math.min(nums.length - i + preSum[x - sum] + 1, result);
    }
  }
  return result > nums.length ? -1 : result;
};