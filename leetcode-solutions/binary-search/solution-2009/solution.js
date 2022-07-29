/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let len = nums.length;
  nums = Array.from(new Set(nums));
  nums = nums.sort((a, b) => b - a);
  let res = len;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i] - len + 1;
    let l = i;
    let r = nums.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (nums[m] > n) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    if (nums[l] >= n) {
      res = Math.min(res, len - (l - i + 1));
    } else {
      res = Math.min(res, len - (l - i));
    }
  }
  return res;
};
