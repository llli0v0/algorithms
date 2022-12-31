/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
  if (nums.reduce((pre, cur) => pre + cur) < k * 2) return 0;
  let mod = 10**9 + 7;
  let all = 1;
  let dp = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    all = all * 2 % mod;
    let n = nums[i];
    for (let j = k - 1; j >= 1; j--) {
      if (j - n >= 0 && dp[j - n]) {
        dp[j] = dp[j - n] + (dp[j] || 0);
        dp[j] %= mod;
      }
    }
  }
  let n = 0;
  for (let key in dp) {
    n += dp[key] * 2;
    n %= mod;
  }
  return (all + mod - n) % mod;
};
