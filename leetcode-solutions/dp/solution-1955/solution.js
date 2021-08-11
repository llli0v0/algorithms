/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function(nums) {
  let dp = [];
  let mod = 10**9 + 7;
  for (let i = 0; i < nums.length; i++) {
    if (dp.length) {
      let last = dp[dp.length - 1];
      if (nums[i] === 0) {
        dp.push({
          0: (last[0] * 2 + 1) % mod,
          1: last[1],
          2: last[2]
        });
      } else if (nums[i] === 1) {
        dp.push({
          0: last[0],
          1: (last[0] + last[1] * 2) % mod,
          2: last[2]
        });
      } else {
        dp.push({
          0: last[0],
          1: (last[1]) % mod,
          2: (last[1] + last[2] * 2) % mod
        });
      }
    } else {
      if (nums[i] === 0) {
        dp.push({
          0: 1,
          1: 0,
          2: 0
        });
      }
    }
  }
  if (!dp.length) return 0;
  return dp[dp.length - 1][2];
};
