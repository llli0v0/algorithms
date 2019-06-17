/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 背包问题 - - ... 被我一眼识破
 */
var canPartition = function(nums) {
  let a = nums.reduce((a, b) => a + b) / 2;
  if (!Number.isInteger(a)) return false;
  let dp = new Array(a + 1).fill(null).map(() => [0, new Set()]);
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let k = i - nums[j];
      if (dp[k] && !dp[k][1].has(j) && dp[k][0] + nums[j] > dp[i][0]) {
        dp[i][0] = dp[k][0] + nums[j];
        dp[i][1] = new Set(dp[k][1]);
        dp[i][1].add(j);
      }
    }
  }
  let s = 0;
  for (let i = 0; i < dp.length; i++) s = Math.max(s, dp[i][0]);
  return s === a;
};