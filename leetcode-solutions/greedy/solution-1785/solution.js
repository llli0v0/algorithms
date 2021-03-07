/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  return Math.ceil(Math.abs(goal - sum) / limit);
};