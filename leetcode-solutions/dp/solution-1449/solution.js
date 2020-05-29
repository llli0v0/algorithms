/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
  let computed = {};
  let arr = dp(target);
  if (arr === null) return '0';
  let result = [];
  for (let i = 8; i >= 0; i--) result = result.concat(new Array(arr[i]).fill(i + 1));
  return result.join('');

  function dp(target) {
    if (target === 0) return new Array(10).fill(0);
    else if (target < 0) return null;
    if (computed[target] !== undefined) return computed[target];
    computed[target] = null;
    for (let i = 0; i < cost.length; i++) {
      if (dp(target - cost[i]) === null) continue;
      let cur = [...dp(target - cost[i])];
      cur[i]++;
      cur[9]++;
      if (computed[target] === null) computed[target] = new Array(10).fill(0);
      for (let j = 9; j >= 0; j--) {
        if (cur[j] > computed[target][j]) {
          computed[target] = cur;
          break;
        } else if (computed[target][j] > cur[j]) break;
      }
    }
    return computed[target];
  }
};