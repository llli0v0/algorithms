/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/**
 * 
 * :vomiting:
 */
var checkSubarraySum = function(nums, k) {
  if (k === 0) { 
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== 0) continue;
      if (nums[i] === 0 && nums[i + 1] === 0) return true;
    }
    return false;
  }
  let hash = { 0: -1 };
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    if (hash[s % k] !== undefined && i - hash[s % k] > 1) return true;
    if (hash[s % k] === undefined) hash[s % k] = i;
  }
  return false;
};