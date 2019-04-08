/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  if (nums.length === 0) return 0;
  let dp = new Array(nums.length).fill(null).map(() => new Array(nums.length).fill(0));
  for (let i = 0; i < nums.length; i++) {
    dp[i][i] = (nums[i - 1] ? nums[i - 1] : 1) * nums[i] * (nums[i + 1] ? nums[i + 1] : 1);
  }
  for (let i = 1; i < nums.length; i++) {
    for (let x = 0; x + i < nums.length; x++) {
      let y = x + i;
      let current = 0;
      for (let m = x; m <= y; m++) {
        let mid = (nums[x - 1] ? nums[x - 1] : 1) * nums[m] * (nums[y + 1] ? nums[y + 1] : 1);
        let left = dp[x][m - 1] ? dp[x][m - 1] : 0;
        let right = dp[m + 1] ? dp[m + 1][y] : 0;
        current = Math.max(current, left + mid + right);
      }
      dp[x][y] = current;
    }
  }
  return dp[0][nums.length - 1];
};