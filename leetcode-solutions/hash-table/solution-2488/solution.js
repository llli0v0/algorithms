/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let map = new Map();
  let index;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      index = i;
      break;
    }
  }
  let preSum = [[0, 0]];
  for (let i = index; i >= 0; i--) {
    let [a, b] = preSum[preSum.length - 1];
    let n = nums[i];
    if (n < k) {
      preSum.push([a + 1, b]);
    } else if (n > k) {
      preSum.push([a, b + 1]);
    }
    [a, b] = preSum[preSum.length - 1];
    map.set(a - b, (map.get(a - b) ?? 0) + 1);
  }
  let res = map.get(0) + (map.get(-1) ?? 0);
  preSum = [[0, 0]];
  for (let i = index + 1; i < nums.length; i++) {
    let [a, b] = preSum[preSum.length - 1];
    let n = nums[i];
    if (n < k) {
      preSum.push([a + 1, b]);
    } else if (n > k) {
      preSum.push([a, b + 1]);
    }
    [a, b] = preSum[preSum.length - 1];
    res += map.get(b - a) ?? 0;
    res += map.get(b - a - 1) ?? 0;
  }
  return res;
};
