/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let farthest = next = 0;
  if (nums.length < 2) return true;
  for (let i = 0; i < nums.length; i = next) {
    if (nums[i] + i >= nums.length - 1) return true;
    while (nums[i]) {
      if (nums[nums[i] + i] + nums[i] + i > farthest) {
        next = nums[i] + i;
        farthest = nums[nums[i] + i] + nums[i] + i;
        if (farthest > nums.length) return true;
      }
      nums[i] -= 1;
    }
    if (nums[next] === 0) return false;
  }
};
