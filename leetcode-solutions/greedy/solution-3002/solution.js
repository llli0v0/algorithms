/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let repeated = 0;
  for (let item of set1) {
    if (set2.has(item)) {
      repeated++;
    }
  }
  let len1 = set1.size;
  let half1 = nums1.length / 2;
  if (set1.size > half1) {
    len1 = half1;
    if (set1.size - repeated > half1) {
      repeated = 0;
    } else {
      repeated -= set1.size - half1;
    }
  }
  let len2 = set2.size;
  let half2 = nums2.length / 2;
  if (set2.size > half2) {
    len2 = half2;
    if (set2.size - repeated > half2) {
      repeated = 0;
    } else {
      repeated -= set2.size - half2;
    }
  }
  return len1 + len2 - repeated;
};
