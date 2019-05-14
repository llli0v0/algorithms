/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = [1];
  let right = [1];
  for (let i = 1; i < nums.length; i++) {
    left.push(left[left.length - 1] * nums[i - 1]);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right.unshift(right[0] * nums[i + 1]);
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(left[i] * right[i]);
  }
  return result;
};