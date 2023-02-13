/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    let nl = lower - nums[i];
    let nu = upper - nums[i];
    if (nums[0] > nu || nums[i - 1] < nl) continue;
    let l = 0;
    let r = i - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (nums[m] >= nl) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    let a = l;
    l = 0;
    r = i - 1;
    while (l < r) {
      let m = Math.ceil((l + r) / 2);
      if (nums[m] <= nu) {
        l = m;
      } else {
        r = m - 1;
      }
    }
    res += l - a + 1;
  }
  return res;
};
