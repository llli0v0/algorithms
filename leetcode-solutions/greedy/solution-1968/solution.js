/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  nums.sort((a, b) => a - b);
  let result = new Array(nums.length).fill(null);
  let index = 0;
  for (let i = 0; i < result.length; i += 2) {
    result[i] = nums[index++];
  }
  for (let i = 1; i < result.length; i += 2) {
    result[i] = nums[index++];
  }
  return result;
};
