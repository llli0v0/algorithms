/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
  let computed = {};
  if (nums1.every(i => i < 0) && nums2.every(i => i > 0)) return Math.max(...nums1) * Math.min(...nums2);
  else if (nums1.every(i => i > 0) && nums2.every(i => i < 0)) return Math.min(...nums1) * Math.max(...nums2);
  return dp(nums1.length - 1, nums2.length - 1);

  function dp(a, b) {
    if (a < 0 || b < 0) return 0;
    let key = a + '-' + b;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Math.max(nums1[a] * nums2[b] + dp(a - 1, b - 1), dp(a - 1, b), dp(a, b - 1));
    return computed[key];
  }
};