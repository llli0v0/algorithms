/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  let C = {};
  let S = nums.reduce((a, b) => a + b) / k;
  if (!Number.isInteger(S)) return false;
  let result = false;
  helper(nums, S);
  return result;

  function helper(nums, s) {
    let k = nums.join() + ' ' + s;
    if (C[k]) return;
    C[k] = true;
    if (s < 0 || s > 0 && nums.length === 0) return;
    if (s === 0) {
      if (nums.length === 0) {
        result = true;
      } else {
        helper(nums, S);
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        helper(nums.slice(0, i).concat(nums.slice(i + 1)), s - nums[i]);
      }
    }
  }
};