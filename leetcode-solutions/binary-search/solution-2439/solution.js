/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  let l = 0;
  let r = 10**9;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let cur = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > m) {
        cur += nums[i] - m;
      } else {
        cur -= m - nums[i];
        cur = cur < 0 ? 0 : cur;
      }
    }
    if (cur === 0) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
