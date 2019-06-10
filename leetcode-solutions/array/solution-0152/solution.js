/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    result = Math.max(result, a);
    for (let j = i - 1; j >= 0; j--) {
      a *= nums[j];
      result = Math.max(result, a);
    }
  }
  return result;
};