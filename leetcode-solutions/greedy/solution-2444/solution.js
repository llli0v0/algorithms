/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let p, q, s;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxK || nums[i] < minK) {
      p = q = s = undefined;
    } else {
      if (s === undefined) s = i;
      if (nums[i] === minK) p = i;
      if (nums[i] === maxK) q = i;
      if (p !== undefined && q !== undefined) {
        res += Math.min(p, q) - s + 1;
      }
    }
  }
  return res;
};
