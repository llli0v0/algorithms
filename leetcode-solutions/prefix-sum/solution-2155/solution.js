/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
  let preSum = {};
  for (let i = 0; i < nums.length; i++) {
    preSum[i] = nums[i] + (preSum[i - 1] ?? 0);
  }
  let max = 0;
  let res = [];
  for (let i = 0; i <= nums.length; i++) {
    let val = i - (preSum[i - 1] ?? 0) + preSum[nums.length - 1] - (preSum[i - 1] ?? 0);
    if (val > max) {
      max = val;
      res = [i];
    } else if (val === max) {
      res.push(i);
    }
  }
  return res;
};
