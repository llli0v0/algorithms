/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
  let computed = {};
  return dp(0, stones.length - 1, 1, stones.reduce((a, b) => a + b));

  function dp(l, r, p, sum) {
    if (l >= r) return 0;
    
    let key = `${l} ${r}`;
    if (computed[key] !== undefined) return computed[key];
    if (p) {
      computed[key] = Math.max(dp(l, r - 1, 0, sum - stones[r]) + sum - stones[r], dp(l + 1, r, 0, sum - stones[l]) + sum - stones[l])
    } else {
      computed[key] = Math.min(dp(l, r - 1, 1, sum - stones[r]) - (sum - stones[r]), dp(l + 1, r, 1, sum - stones[l]) - (sum - stones[l]));
    }
    return computed[key];
  }
};