/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function(nums1, nums2) {
  let dp1 = new Array(nums1.length).fill(1);
  let dp2 = new Array(nums2.length).fill(1);
  let res = 1;
  for (let i = 1; i < nums1.length; i++) {
    let n1 = nums1[i];
    let n2 = nums2[i];
    if (n1 >= nums1[i - 1]) {
      dp1[i] = Math.max(dp1[i], dp1[i - 1] + 1);
    }
    if (n1 >= nums2[i - 1]) {
      dp1[i] = Math.max(dp1[i], dp2[i - 1] + 1);
    }
    if (n2 >= nums1[i - 1]) {
      dp2[i] = Math.max(dp2[i], dp1[i - 1] + 1);
    }
    if (n2 >= nums2[i - 1]) {
      dp2[i] = Math.max(dp2[i], dp2[i - 1] + 1);
    }
    res = Math.max(res, dp1[i], dp2[i]);
  }
  return res;
};
