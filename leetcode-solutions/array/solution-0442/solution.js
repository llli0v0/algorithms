/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
      let key = nums[i] - 1;
      [nums[i], nums[key]] = [nums[key], nums[i]];
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) result.push(nums[i]);
  }
  return result;
};