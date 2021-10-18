/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
  let nums1Reverse = nums1.slice().reverse();
  let l = Math.min(nums1[0] * nums2[nums2.length - 1], nums2[0] * nums1[nums1.length - 1]);
  let r = Math.max(nums1[0] * nums2[0], nums1[nums1.length - 1] * nums2[nums2.length - 1]);
  let lenArr = [];
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let count = getCount(m);
    if (count < k) {
      l = m + 1;
    } else {
      r = m;
    }
    lenArr = [];
  }
  let result = l;
  if (getCount(l) < k) {
    lenArr = [];
    getCount(l + 1);
    result = l + 1;
  }
  return result;
  
  function getCount(m) {
    for (let i = 0; i < nums2.length; i++) {
      let arr1;
      if (nums2[i] < 0) {
        arr1 = nums1Reverse;
      } else {
        arr1 = nums1;
      }
      if (nums2[i] * arr1[arr1.length - 1] < m) {
        lenArr.push(arr1.length);
        continue;
      } else if (nums2[i] * arr1[0] > m) {
        lenArr.push(0);
        continue;
      }
      let L = 0;
      let R = arr1.length - 1;
      while (L < R) {
        let M = Math.ceil((L + R) / 2);
        if (arr1[M] * nums2[i] > m) {
          R = M - 1;
        } else {
          L = M;
        }
      }
      lenArr.push(L + 1);
    }
    let count = lenArr.reduce((pre, cur) => pre + cur);
    return count;
  }
};