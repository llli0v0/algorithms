/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
  let preSum = new Array(nums.length).fill(null).map(() => new Array(31).fill(0));
  for (let i = 0; i < nums.length; i++) {
    let last = preSum[i - 1] ?? new Array(31).fill(0);
    for (let j = 0; j <= 30; j++) {
      if (((1 << j) & nums[i]) === (1 << j)) {
        preSum[i][j] = last[j] + 1;
      } else {
        preSum[i][j] = last[j];
      }
    }
  }
  let maxVal = [nums[nums.length - 1]];
  for (let i = nums.length - 2; i >= 0; i--) {
    maxVal.unshift(nums[i] | maxVal[0]);
  }
  let res = [];
  for (let i = 0; i < preSum.length; i++) {
    let l = i;
    let r = preSum.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      let v = 0;
      let pre = preSum[i - 1] ?? new Array(31).fill(0);
      for (let j = 0; j < preSum[m].length; j++) {
        if (preSum[m][j] - pre[j] > 0) {
          v += 1 << j;
        }
      }
      if (v === maxVal[i]) {
        r = m;
      } else {
        l = m + 1
      }
    }
    res.push(l - i + 1);
  }
  return res;
};
