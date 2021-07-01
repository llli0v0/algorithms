/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let dp = [{ odd: nums[0], even: null }];
  for (let i = 1; i < nums.length; i++) {
    let cur = { odd: dp[i - 1].odd, even: dp[i - 1].even };
    cur.odd = Math.max(cur.odd, (cur.even === null ? 0 : cur.even) + nums[i]);
    cur.even = Math.max(cur.even, cur.odd - nums[i]);
    dp.push(cur);
  }
  return Math.max(dp[dp.length - 1].odd, dp[dp.length - 1].even);
};