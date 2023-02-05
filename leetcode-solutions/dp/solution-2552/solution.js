/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
  let dp = new Array(nums.length).fill(0);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        count++;
        res += dp[j];
      } else {
        dp[j] += count;
      }
    }
  }
  return res;
};
