/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
  let res = 0;
  let counter = {};
  let l = 0;
  let pair = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    counter[n] = (counter[n] ?? 0) + 1;
    pair += counter[n] - 1;
    while (pair >= k) {
      let left = nums[l];
      counter[left]--;
      pair -= counter[left];
      l++;
    }
    res += l;
  }
  return res;
};
