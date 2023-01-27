/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
  if (k === 0) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] !== nums2[i]) return -1;
    }
    return 0;
  }
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums1.length; i++) {
    let x = nums1[i] - nums2[i];
    if (Math.abs(x) / k % 1 !== 0) return -1;
    if (x > 0) {
      a += x / k;
    } else if (x < 0) {
      b += -x / k;
    }
  }
  return a === b ? a : -1;
};
