/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumTotalCost = function(nums1, nums2) {
  let maxCount = 0;
  let maxVal = 0;
  let same = {};
  let sameSet = new Set();
  let sameCount = 0;
  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    let [a, b] = [nums1[i], nums2[i]];
    if (a === b) {
      sameCount++;
      res += i;
      same[a] = same[a] ?? 0;
      same[a]++;
      if (same[a] > maxCount) {
        maxVal = a;
        maxCount = same[a];
      }
      sameSet.add(i);
    }
  }
  if (maxCount > sameCount / 2) {
    let c = sameCount - (sameCount - maxCount) * 2;
    for (let i = 0; i < nums1.length; i++) {
      if (!sameSet.has(i) && nums1[i] !== maxVal && nums2[i] !== maxVal) {
        res += i;
        c--;
        if (!c) break;
      }
    }
    if (c) res = -1;
  }
  return res;
};
