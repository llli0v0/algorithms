/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
  let l = 1;
  let r = 10**9;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let last;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= m && (last === undefined || i - last > 1)) {
        count++;
        last = i;
      }
    }
    if (count >= k) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
