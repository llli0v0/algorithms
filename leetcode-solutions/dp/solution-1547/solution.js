/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  let computed = {};
  cuts.sort((a, b) => a - b);
  return dp(0, n, cuts);

  function dp(l, r, cuts) {
    if (cuts.length === 0) return 0;
    let key = l + '-' + r;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    for (let i = 0; i < cuts.length; i++) {
      computed[key] = Math.min(computed[key], dp(l, cuts[i], cuts.slice(0, i)) + dp(cuts[i], r, cuts.slice(i + 1)) + r - l);
    }
    return computed[key];
  }
};