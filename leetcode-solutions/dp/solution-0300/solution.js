/**
 * @param {number[]} nums
 * @return {number}
 * n²
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] - nums[j] > 0) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 * nlogn
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  let LIS = [];
  for (let i = 0; i < nums.length; i++) {
    if (LIS.length === 0) {
      LIS.push(nums[i]);
    } else if (nums[i] > LIS[LIS.length - 1]) {
      LIS.push(nums[i]);
    } else {
      let l = 0;
      let r = LIS.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[i] > LIS[m]) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      LIS.splice(l, 1, nums[i]);
    }
  }
  return LIS.length;
};