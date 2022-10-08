/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function(nums, k) {
  if (nums.length === k) return 0;
  k = nums.length / k;
  let n = 1 << nums.length;
  let arr = [];
  let dp = {};
  let valMap = {};
  for (let i = 0; i < n; i++) {
    let s = i.toString(2).split('').reverse().join('');
    let one = 0;
    let min = 17, max = 0;
    let set = new Set();
    for (let j = 0; j < s.length; j++) {
      if (s[j] === '1') {
        one++
        max = Math.max(max, nums[j]);
        min = Math.min(min, nums[j]);
        set.add(nums[j]);
      }
    }
    if (one === k && set.size === k) {
      valMap[i] = max - min;
      arr.push(i);
    }
    if (one && one % k === 0) {
      let r = helper(i);
      if (i === n - 1) {
        return r > 1000 ? -1 : r;
      }
    }
  }

  function helper(n) {
    if (dp[n] !== undefined) return dp[n];
    dp[n] = Infinity;
    let s = n.toString(2);
    let one = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '1') {
        one++;
      }
    }
    if (one === k) {
      if (valMap[n] !== undefined) {
        return dp[n] = valMap[n];
      }
    } else if (one % k === 0) {
      for (i = 0; i < arr.length; i++) {
        if ((n & arr[i]) === arr[i]) {
          dp[n] = Math.min(dp[n], valMap[arr[i]] + helper(n - arr[i]));
        }
      }
    }
    return dp[n];
  }
};
