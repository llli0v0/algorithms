/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums.push(0);
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] >= 0 && nums[i] < nums.length && nums[nums[i]] !== nums[i]) {
      let temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp;
    }
  }
  for (let i = 0; i < max + 1; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return max + 1;
};