/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
  return Math.max(helper(nums1, nums2), helper(nums2, nums1));

  function helper(arr1, arr2) {
    let arr = [];
    let arr1Sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      arr1Sum += arr1[i];
      arr.push(arr2[i] - arr1[i]);
    }
    let maxSum = arr[0];
    let preSum = arr[0];
    let minPre = Math.min(0, arr[0]);
    for (let i = 1; i < arr.length; i++) {
      preSum += arr[i];
      maxSum = Math.max(maxSum, preSum - minPre);
      minPre = Math.min(minPre, preSum);
    }
    return maxSum + arr1Sum;
  }
};
