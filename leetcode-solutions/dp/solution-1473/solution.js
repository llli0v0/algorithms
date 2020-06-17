/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
  let computed = {};
  let result = dp(houses.length - 1, target, -1);
  return result > 10**9 ? -1 : result;
  
  function dp(index, target, canNotUse) {
    if (index === -1 && target === 0) return 0;
    else if (target > index + 1) return Infinity;
    let key = index + '-' + target + '-' + canNotUse;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    for (let i = 0; i < n; i++) {
      if (i === canNotUse) continue;
      for (let j = index; j >= 0; j--) {
        let sum = 0;
        let f = false;
        for (let g = index; g >= j; g--) {
          if (houses[g] && houses[g] !== i + 1) f = true;
          if (houses[g] === 0) sum += cost[g][i];
        }
        if (!f) computed[key] = Math.min(computed[key], sum + dp(j - 1, target - 1, i));
      }
    }
    return computed[key];
  }
};