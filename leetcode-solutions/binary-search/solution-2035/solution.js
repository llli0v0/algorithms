/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
  let nums1 = nums.slice(0, nums.length / 2);
  let sum1 = nums1.reduce((pre, cur) => pre + cur);
  let nums2 = nums.slice(nums.length / 2);
  let sum2 = nums2.reduce((pre, cur) => pre + cur);
  let nums1Map = {};
  let nums2Map = {};
  for (let i = 0; i < 2 ** nums1.length; i++) {
    let si = Number(i).toString(2);
    si = si.split('').reverse();
    let count = 0;
    let s1 = 0;
    let s2 = 0;
    for (let j = 0; j < si.length; j++) {
      if (si[j] === '1') {
        count++;
        s1 += nums1[j];
        s2 += nums2[j];
      }
    }
    if (nums1Map[count] === undefined) nums1Map[count] = [];
    if (nums2Map[count] === undefined) nums2Map[count] = [];
    nums1Map[count].push(s1);
    nums2Map[count].push(s2);
  }
  for (let key in nums2Map) {
    nums2Map[key].sort((a, b) => a - b);
  }
  let result = Infinity;
  for (let i = 0; i <= nums1.length; i++) {
    let arr1 = nums1Map[i];
    let arr2 = nums2Map[nums2.length - i];
    for (let j = 0; j < arr1.length; j++) {
      let n1 = arr1[j];
      let l = 0;
      let r = arr2.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        let a = n1 + arr2[m];
        let b = sum1 + sum2 - a;
        if (a > b) {
          r = m;
        } else {
          l = m + 1;
        }
      }
      result = Math.min(
        result,
        Math.abs(2 * n1 + 2 * arr2[l] - sum1 - sum2),
        l - 1 < 0 ? Infinity : Math.abs(2 * n1 + 2 * arr2[l - 1] - sum1 - sum2),
        l + 1 >= arr2.length ? Infinity : Math.abs(2 * n1 + 2 * arr2[l + 1] - sum1 - sum2)
      );
    }
  }
  return result;
};