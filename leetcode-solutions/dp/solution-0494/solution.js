/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let result = 0;
  let cache = {};
  helper(nums.slice(1), S - nums[0]);
  helper(nums.slice(1), S + nums[0]);
  return result;

  function helper(nums, S) {
    let k = nums.length + ' ' + S;
    if (cache[k] !== undefined) {
      result += cache[k];
      return cache[k];
    }
    if (!nums.length) {
      if (!S) {
        result += 1;
        return 1;
      }
      return 0;
    }
    let n = 0;
    n += helper(nums.slice(1), S - nums[0]);
    n += helper(nums.slice(1), S + nums[0]);
    cache[k] = n;
    return n;
  }
};