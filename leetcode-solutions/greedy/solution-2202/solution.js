/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  if (nums.length === 0) return -1;
  else if (nums.length === 1 && k % 2) return -1;
  else if (k === 0) return nums[0];
  else if (k === 1) return nums[1];

  if (k > nums.length) return nums.reduce((pre, cur) => Math.max(pre, cur));
  else if (k === nums.length) return nums.slice(0, nums.length - 1).reduce((pre, cur) => Math.max(pre, cur));
  else return Math.max(nums[k], nums.slice(0, k - 1).reduce((pre, cur) => Math.max(pre, cur)));
};