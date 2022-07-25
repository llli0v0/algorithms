/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function(nums, k) {
  let map = {};
  let set = new Set();
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) continue;
    set.add(nums[i]);
    let s = nums[i].toString(2);
    let count = 0;
    for (let j = 0; j < s.length; j++) if (s[j] === '1') count++;
    if (map[count] === undefined) map[count] = 0;
    map[count]++;
    for (let j = k - count; j <= 64; j++) {
      if (map[j]) res += map[j] * 2;
      if (j === count) res--;
    }
  }
  return res;
};
