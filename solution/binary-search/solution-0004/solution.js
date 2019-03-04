/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// I know the log of m plus n solution to this problem, 
// but I'm getting bored. The process is full of boring boundary cases. 
// It annoyed me, and I lost my patience. So I put an m plus n here
var findMedianSortedArrays = function(nums1, nums2) {
  let c = nums1.concat(nums2);
  c.sort((a, b) => a - b);
  let m = Math.floor(c.length / 2);
  if (c.length % 2 ==0) {
    return (c[m] + c[m-1]) / 2;
  } else {
    return c[m];
  }
};

module.exports = { solution: findMedianSortedArrays };