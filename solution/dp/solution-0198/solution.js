/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  let subBest = { 0: nums[0] };
  for (let i = 1; i < nums.length; i++) {
    subBest[i] = Math.max(subBest[i - 1], (subBest[i - 2] === undefined ? 0 : subBest[i - 2]) + nums[i]);
  }
  return subBest[nums.length - 1];
};