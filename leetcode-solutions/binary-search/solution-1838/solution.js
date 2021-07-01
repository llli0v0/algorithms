/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b);
  let preSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    preSum.push(sum);
  }
  let result = 1;
  for (let i = 1; i < preSum.length; i++) {
    if (nums[i] - nums[i - 1] > k) continue;
    let l = 0;
    let r = i - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if ((i - m) * nums[i]  - (preSum[i - 1] - (preSum[m - 1] === undefined ? 0 : preSum[m - 1])) > k) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    result = Math.max(result, i - l + 1);
  }
  return result;
};
