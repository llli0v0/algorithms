/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  let set = new Set(nums);
  let res = 0;
  for (let i = 2; i < nums.length; i++) {
    let n = nums[i];
    if (set.has(n - diff) && set.has(n - 2 * diff)) res++;
  }
  return res;
};
