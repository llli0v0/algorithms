/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  nums.sort((a,b) => b - a);
  let prefix = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];
    if (prefix > 0) res++;
  }
  return res;
};
