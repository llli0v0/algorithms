/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  let dp = new Array(nums.length).fill(null).map(() => [1, 1]);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[i][0] < dp[j][0] + 1) {
          dp[i] = [dp[j][0] + 1, dp[j][1]];
        } else if (dp[i][0] === dp[j][0] + 1) {
          dp[i][1] += dp[j][1];
        }
      }
    }
  }
  let m = 0;
  for (let i = 0; i < dp.length; i++) {
    m = Math.max(m, dp[i][0]);
  }
  let result = 0;
  for (let i = 0; i < dp.length; i++) {
    if (dp[i][0] === m) result += dp[i][1];
  }
  return result;
};