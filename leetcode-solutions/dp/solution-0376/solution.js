/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  let dp = new Array(nums.length).fill(null).map(() => [1, 1]);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] - nums[j] === 0) continue;
      if (nums[i] - nums[j] > 0) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      } else {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
      }
    }
  }
  let result = 0;
  for (let i = 0; i < dp.length; i++) result = Math.max(result, dp[i][0], dp[i][1]);
  return result;
};