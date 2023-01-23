/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function(nums, k) {
  let trimMap = new Array(nums.length).fill(null).map(() => new Array(nums.length).fill(0));
  trimMap[0][0] = 1;
  let trimArr = [ {[nums[0]]: 1} ];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < trimArr.length; j++) {
      if (trimArr[j][nums[i]] === undefined) {
        trimMap[j][i] = trimMap[j][i - 1] + 1;
        trimArr[j][nums[i]] = 1;
      } else if (trimArr[j][nums[i]] === 1) {
        trimMap[j][i] = trimMap[j][i - 1] - 1;
        trimArr[j][nums[i]]++;
      } else {
        trimMap[j][i] = trimMap[j][i - 1];
        trimArr[j][nums[i]]++;
      }
    }
    trimMap[i][i] = 1;
    trimArr.push({[nums[i]]: 1});
  }
  let dp = {};
  return helper(nums.length - 1);

  function helper(idx) {
    if (idx < 0) return 0;
    if (dp[idx] !== undefined) return dp[idx];
    dp[idx] = Infinity;
    for (let i = idx; i >= 0; i--) {
      dp[idx] = Math.min(dp[idx], k + (idx - i + 1 - trimMap[i][idx]) + helper(i - 1));
    }
    return dp[idx];
  }
};
