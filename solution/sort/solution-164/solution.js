/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let currentMax = nums[1] - nums[0];
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i] - nums[i - 1];
    if (current > currentMax) currentMax = current;
  }
  return currentMax;
};
