/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  let dp = {};
  return helper(nums.length - 1);
  
  function helper(index) {
    if (dp[index] !== undefined) return dp[index];
    if (index === 0) return false;
    else if (index < 0) return true;
    let res = false;
    let a = nums[index];
    let b = nums[index - 1];
    let c = nums[index - 2];
    if (a && b) {
      if (a === b && helper(index - 2)) res = true;
    }
    if (a && b && c) {
      if (a === b && b === c && helper(index - 3)) res = true;
      if (a - b === 1 && b - c === 1 && helper(index - 3)) res = true;
    }
    dp[index] = res;
    return res;
  }
};
