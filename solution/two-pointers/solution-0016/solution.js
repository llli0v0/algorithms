/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let currentMinGap = Infinity, result;
  for (let i = 1; i < nums.length - 1; i++) {
    for (let m = 0; m < i; m++) {
      let sum1 = nums[i] + nums[m];
      for (let n = i + 1; n < nums.length; n++) {
        let sum = sum1 + nums[n];
        let gap = Math.abs(target - sum);
        if (gap < currentMinGap) {
          result = sum;
          currentMinGap = gap;
        }
      }
    }
  }
  return result;
};