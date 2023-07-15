/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
  let dp = {};
  return helper(nums.length - 1);

  function helper(index) {
    if (index === 0) return 0;
    if (dp[index] !== undefined) return dp[index];
    dp[index] = -1;
    for (let i = 0; i < index; i++) {
      if (Math.abs(nums[index] - nums[i]) <= target) {
        let a = helper(i);
        if (a > -1) dp[index] = Math.max(dp[index], a + 1);
      }
    }
    return dp[index];
  }
};
