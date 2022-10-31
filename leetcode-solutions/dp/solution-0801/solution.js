/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
  let [a, b] = [nums1[nums1.length - 1], nums2[nums2.length - 1]];
  let dp = new Map();
  return Math.min(helper(nums1.length - 2, a, b), helper(nums1.length - 2, b, a) + 1);

  function helper(index, a, b) {
    if (index < 0) return 0;
    let key = `${index} ${a} ${b}`;
    if (dp.has(key)) return dp.get(key);
    let val = Infinity;
    let [x, y] = [nums1[index], nums2[index]];
    if (a > x && b > y) {
      val = Math.min(val, helper(index - 1, x, y));
    }
    if (a > y && b > x) {
      val = Math.min(val, helper(index - 1, y, x) + 1);
    }
    dp.set(key, val);
    return val;
  }
};
