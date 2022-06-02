/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function(nums, numSlots) {
  let s = new Array(numSlots).fill(2).join('');
  let result = 0;
  let dp = {};
  for (let i = 0; i < s.length; i++) {
    result = Math.max(result, ((i + 1) & nums[0]) + helper(1, s.slice(0, i) + '1' + s.slice(i + 1)));
  }
  return result;

  function helper(idx, s) {
    if (idx >= nums.length) return 0;
    let key = `${idx} ${s}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '0') {
        dp[key] = Math.max(dp[key], (nums[idx] & (i + 1)) + helper(idx + 1, s.slice(0, i) + (s[i] === '2' ? '1' : '0') + s.slice(i + 1)));
      }
    }
    return dp[key];
  }
};
