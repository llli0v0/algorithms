/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
  let mod = 10**9 + 7;
  let numsAbs = [];
  for (let i = 0; i < nums1.length; i++) numsAbs.push(Math.abs(nums1[i] - nums2[i]));
  let absSum = numsAbs.reduce((a, b) => (a + b) % mod);
  let result = absSum;
  nums1.sort((a, b) => a - b);
  for (let i = 0; i < nums2.length; i++) {
    let mostClose;
    if (nums1[0] > nums2[i]) mostClose = 0;
    else if (nums1[nums1.length - 1] < nums2[i]) mostClose = nums1.length - 1;
    else {
      let l = 0;
      let r = nums1.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums1[m] < nums2[i] && nums2[i] < nums1[m + 1]) {
          if (nums2[i] - nums1[m] > nums1[m + 1] - nums2[i]) {
            l = r = m + 1;
          } else {
            l = r = m;
          }
        } else if (nums1[m] === nums2[i]) {
          l = r = m;
        } else if (nums1[m] < nums2[i]) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      mostClose = l;
    }
    result = Math.min(result, absSum - (numsAbs[i] - Math.abs(nums1[mostClose] - nums2[i])));
  }
  return (result + mod) % mod;
};