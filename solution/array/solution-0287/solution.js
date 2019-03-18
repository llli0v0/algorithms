/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) return nums[i];
    s.add(nums[i]);
  }
};