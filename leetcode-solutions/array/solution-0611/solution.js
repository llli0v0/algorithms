/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let result = 0;
  nums = nums.sort((a, b) => a - b);
  while (nums[0] === 0) nums.shift();
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      for (let n = j + 1; n < i; n++) {
        if (nums[j] + nums[n] > nums[i]) {
          result++;
        }
      }
    }
  }
  return result;
};