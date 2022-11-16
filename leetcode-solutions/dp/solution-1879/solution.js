/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function(nums1, nums2) {
  let dp = new Map();
  let len = nums1.length;
  return helper((1 << len) - 1);

  function helper(bm) {
    if (bm === 0) return 0;
    if (dp.has(bm)) return dp.get(bm);
    let c = counter(bm);
    let val = Infinity;
    for (let i = 0; i < len; i++) {
      if (((1 << i) & bm) === (1 << i)) {
        val = Math.min(val, (nums1[c - 1] ^ nums2[i]) + helper(bm - (1 << i)));
      }
    }
    dp.set(bm, val);
    return val;
  }

  function counter(n) {
    let val = 0;
    for (let i = 0; i < len; i++) {
      if (((1 << i) & n) === (1 << i)) val++;
    }
    return val;
  }
};
