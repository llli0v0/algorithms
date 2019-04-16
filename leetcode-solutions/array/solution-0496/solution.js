/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let nums2map = {};
  for (let i = 0; i < nums2.length; i++) {
    nums2map[nums2[i]] = i;
  }
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let find = false;
    for (let j = nums2map[nums1[i]]; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        find = true;
        break;
      }
    }
    if (!find) result.push(-1);
  }
  return result;
};

nextGreaterElement([4,1,2], [1,3,4,2]);