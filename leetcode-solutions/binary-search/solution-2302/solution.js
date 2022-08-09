/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let preSum = [];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = (preSum[preSum.length - 1] || 0) + nums[i];
    preSum.push(a);
    if (a * preSum.length < k) {
      res += i + 1;
    } else if (nums[i] < k) {
      let l = 0;
      let r = i;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if ((a - preSum[m]) * (i - m) >= k) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      if (a - preSum[l]) res += i - l;
    }
  }
  return res;
};
