/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let p = 0;
  while (p < nums.length) {
    if (nums[p] !== nums[p + 1]) {
      p += 1;
    } else {
      while (nums[p] === nums[p + 2]) {
        nums.splice(p + 2, 1);
      }
      p += 2;
    }
  }
  return nums.length;
};