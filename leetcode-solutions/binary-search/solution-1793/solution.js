/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i];
  }
  nums.sort((a, b) => a[0] - b[0]);
  let n = nums.shift();
  let result = n[0] * (nums.length + 1);
  let handled = [n[1]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i][1] < handled[0]) {
      if (handled[0] - 1 >= k) result = Math.max(result, nums[i][0] * handled[0]);
      handled.unshift(nums[i][1]);
    } else if (nums[i][1] > handled[handled.length - 1]) {
      if (handled[handled.length - 1] + 1 <= k) result = Math.max(result, nums[i][0] * (nums.length - handled[handled.length - 1]));
      handled.push(nums[i][1]);
    } else {
      let l = 0;
      let r = handled.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[i][1] > handled[m] && nums[i][1] < handled[m + 1]) {
          l = r = m;
        } else if (nums[i][1] > handled[m] && nums[i][1] > handled[m + 1]) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      if (handled[l] < k && handled[l + 1] > k) result = Math.max(result, nums[i][0] * (handled[l + 1] - handled[l] - 1));
      handled.splice(l + 1, 0, nums[i][1]);
    }
  }
  return result;
};