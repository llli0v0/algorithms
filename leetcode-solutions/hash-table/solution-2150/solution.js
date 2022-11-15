/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
  let counter = new Map();
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    counter.set(n, (counter.get(n) ?? 0) + 1);
  }
  let res = [];
  for (let [key, val] of counter.entries()) {
    if (val === 1 && !counter.has(key - 1) && !counter.has(key + 1)) {
      res.push(key);
    }
  }
  return res;
};
