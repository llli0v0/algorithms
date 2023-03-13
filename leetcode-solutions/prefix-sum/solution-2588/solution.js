/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
  let map = { 0: 1 };
  let counter = new Map();
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    for (let j = 0; j < 20; j++) {
      if ((n & (1 << j)) === (1 << j)) {
        counter.set(j, (counter.get(j) ?? 0) + 1);
      }
    }
    let key = 0;
    for (let [k, v] of counter) {
      if (v % 2) {
        key += (1 << k);
      }
    }
    res += map[key] ?? 0;
    map[key] = (map[key] ?? 0) + 1;
  }
  return res;
};
