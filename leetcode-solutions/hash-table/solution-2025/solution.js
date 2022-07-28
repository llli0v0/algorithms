/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function(nums, k) {
  let map = {};
  let preSum = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = k - nums[i];
    if (map[a] === undefined) map[a] = new Set();
    map[a].add(i);
    sum += nums[i];
    preSum[i] = sum;
  }
  let resmap = {};
  let res = 0;
  let res1 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let a = preSum[i];
    let b = sum - a;
    if (a === b) res1++;
    let am = map[b - a];
    let bm = map[a - b];
    if (am) {
      for (let v of am) {
        if (v <= i) {
          if (resmap[v] === undefined) resmap[v] = 0;
          resmap[v]++;
          res = Math.max(res, resmap[v]);
        }
      }
    }
    if (bm) {
      for (let v of bm) {
        if (v > i) {
          if (resmap[v] === undefined) resmap[v] = 0;
          resmap[v]++;
          res = Math.max(res, resmap[v]);
        }
      }
    }
  }
  return Math.max(res, res1);
};
