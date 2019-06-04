/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  let dp = {};
  return Math.max(
    nums[0] + helper(nums.slice(2, nums.length - 1), 2, nums.length - 2),
    helper(nums.slice(1), 1, nums.length - 1)
  );
  function helper(nums, l, r) {
    if (!nums.length) return 0;
    if (dp[l + ' ' + r] !== undefined) return dp[l + ' ' + r];
    let n = Math.max(
      nums[0] + helper(nums.slice(2), l + 2, r),
      helper(nums.slice(1), l + 1, r)
    );
    dp[l + ' ' + r] = n;
    return n;
  }
};