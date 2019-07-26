/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums = nums.sort((a, b) => a - b);

  if (!nums.length) return [];

  let dp = [];

  dp[0] = [1, [nums[0]]];

  let result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = [1, [nums[i]]];

    for (let j = i - 1; j >= 0; j--) {
      let a = dp[j][1];
      let F = true;

      for (let n = 0; n < a.length; n++) {
        if (nums[i] % a[n] !== 0) F = false;
      }

      if (F && a.length + 1 > dp[i][0]) dp[i] = [a.length + 1, a.concat([nums[i]])];
    }

    if (dp[i][0] > result.length) result = dp[i][1];
  }

  return result;
};