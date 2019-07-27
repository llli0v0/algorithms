/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums = nums.sort((a, b) => a - b);

  if (!nums.length) return [];

  let dp = [];

  dp[0] = [nums[0]];

  let result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = [nums[i]];

    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && dp[j].length + 1 > dp[i].length) dp[i] = dp[j].concat([nums[i]]);
    }

    if (dp[i].length > result.length) result = dp[i];
  }

  return result;
};