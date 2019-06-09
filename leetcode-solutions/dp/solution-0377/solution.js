/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let dp = {};
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    helper(target - nums[i]);
  }
  return result;

  function helper(target) {
    if (dp[target] !== undefined) {
      result += dp[target];
      return dp[target];
    }
    if (target < 0) return 0;
    if (target === 0) {
      result += 1;
      return 1;
    }
    let a = 0;
    for (let i = 0; i < nums.length; i++) {
      a += helper(target - nums[i]);
    }
    dp[target] = a;
    return a;
  }
};