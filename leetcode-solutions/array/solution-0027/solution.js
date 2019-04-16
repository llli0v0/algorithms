/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = 0;
  while (index < nums.length) {
    while (nums[index] === val) {
      nums.splice(index, 1);
    }
    index++;
  }
  return nums.length;
};