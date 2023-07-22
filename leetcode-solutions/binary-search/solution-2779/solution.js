/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = nums[0] - k; i <= nums[nums.length - 1] + k; i++) {
    let min = i - k;
    let max = i + k;
    let a, b;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (nums[m] < min) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    a = l;
    l = 0;
    r = nums.length - 1;
    while (l < r) {
      let m = Math.ceil((l + r) / 2);
      if (nums[m] > max) {
        r = m - 1;
      } else {
        l = m;
      }
    }
    b = l;
    res = Math.max(res, b - a + 1);
  }
  return res;
};
