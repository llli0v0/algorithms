/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
  let nums1Set = new Set(nums1);
  let publicSet = new Set();
  let result = 0n;
  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      publicSet.add(nums2[i]);
      result += BigInt(nums2[i]);
    }
  }
  let nums1New = [];
  let sum = 0n;
  while (nums1.length) {
    let cur = nums1.shift();
    if (publicSet.has(cur)) {
      nums1New.push(sum);
      sum = 0n;
    } else sum += BigInt(cur);
  }
  nums1New.push(sum);
  let nums2New = [];
  sum = 0n;
  while (nums2.length) {
    let cur = nums2.shift();
    if (publicSet.has(cur)) {
      nums2New.push(sum);
      sum = 0n;
    } else sum += BigInt(cur);
  }
  nums2New.push(sum);
  for (let i = 0; i < nums1New.length; i++) {
    if (nums1New[i] > nums2New[i]) result += nums1New[i];
    else result += nums2New[i];
  }
  return Number(result % (10n**9n + 7n));
};