/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
  let dp = new Map();
  let count = slices.length / 3;
  let res = 0;
  for (let i = slices.length - 2; i >= 0; i--) {
    res = Math.max(res, slices[i] + helper(i - 2, count - 1));
  }
  slices.push(slices.shift());
  dp = new Map();
  for (let i = slices.length - 2; i >= 0; i--) {
    res = Math.max(res, slices[i] + helper(i - 2, count - 1));
  }
  return res;
  
  function helper(index, count) {
    if (count === 0) return 0;
    let key = `${index} ${count}`;
    if (dp.has(key)) return dp.get(key);
    let val = 0;
    for (let i = index; i - 1 >= (count - 1) * 2 - 1; i--) {
      val = Math.max(val, slices[i] + helper(i - 2, count - 1));
    }
    dp.set(key, val);
    return val;
  }
};
