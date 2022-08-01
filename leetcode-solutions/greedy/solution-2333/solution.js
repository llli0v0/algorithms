/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
 var minSumSquareDiff = function(nums1, nums2, k1, k2) {
  let arr = new Array(10**5).fill(0);
  for (let i = 0; i < nums1.length; i++) {
    arr[Math.abs(nums1[i] - nums2[i]) - 1]++;
  }
  let k = k1 + k2;
  for (let i = arr.length - 1; i >= 0 && k > 0; i--) {
    if (k - arr[i] >= 0) {
      arr[i - 1] += arr[i];
      k -= arr[i];
      arr[i] = 0;
    } else {
      arr[i] -= k;
      arr[i - 1] += k;
      k = 0;
    }
  }
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * ((i + 1) ** 2);
  }
  return res;
};
