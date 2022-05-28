/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length % 2 === 0) stack.push(nums[i]);
    else if (stack[stack.length - 1] !== nums[i]) {
      stack.push(nums[i]);
    }
  }
  return nums.length - stack.length + (stack.length % 2 ? 1 : 0);
};