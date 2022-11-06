/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
  let counter = new Map();
  let set = new Set();
  let preSum = 0;
  for (let i = 0; i < k - 1; i++) {
    let n = nums[i];
    if (!counter.has(n)) counter.set(n, 0);
    counter.set(n, counter.get(n) + 1);
    set.add(n);
    preSum += n;
  }
  let preSum1 = 0;
  let res = 0;
  for (let i = k - 1; i < nums.length; i++) {
    let n = nums[i];
    preSum += n;
    if (!counter.has(n)) counter.set(n, 0);
    counter.set(n, counter.get(n) + 1);
    set.add(n);
    if (i - k >= 0) {
      let n1 = nums[i - k];
      counter.set(n1, counter.get(n1) - 1);
      if (counter.get(n1) === 0) set.delete(n1);
    }
    if (set.size === k) {
      res = Math.max(res, preSum - preSum1);
    }
    preSum1 += nums[i - k + 1];
  }
  return res;
};
