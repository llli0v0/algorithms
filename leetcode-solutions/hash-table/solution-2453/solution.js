/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
  let map = new Map();
  let max = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let k = n % space;
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(n);
    let len = map.get(k).length;
    if (len > max) {
      arr = [k];
      max = len;
    } else if (max === len) {
      arr.push(k);
    }
  }
  let res = Infinity;
  for (let i = 0; i < arr.length; i++) {
    res = Math.min(res, map.get(arr[i]).sort((a, b) => a - b)[0]);
  }
  return res;
};
