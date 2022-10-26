/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
  let count = slices.length / 3;
  let dp = new Array(slices.length).fill(null).map(() => new Array(count).fill(undefined));
  let res = 0;
  for (let i = slices.length - 2; i >= 0; i--) {
    res = Math.max(res, slices[i] + helper(i - 2, count - 1));
  }
  slices.push(slices.shift());
  dp = new Array(slices.length).fill(null).map(() => new Array(count).fill(undefined))
  for (let i = slices.length - 2; i >= 0; i--) {
    res = Math.max(res, slices[i] + helper(i - 2, count - 1));
  }
  return res;
  
  function helper(index, count) {
    if (count === 0 || index < 0) return 0;
    let val = dp[index][count];
    if (val !== undefined) return val;
    val = 0;
    for (let i = index; i - 1 >= (count - 1) * 2 - 1; i--) {
      val = Math.max(val, slices[i] + helper(i - 2, count - 1));
    }
    dp[index][count] = val;
    return val;
  }
};
