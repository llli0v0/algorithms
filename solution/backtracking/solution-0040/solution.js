/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort();
  let rset = new Set();
  for (let i = 0; i < candidates.length; i++) {
    f('' + candidates[i], target - candidates[i], candidates.slice(i + 1));
  }
  return Array.from(rset).map(i => i.split('_').map(m => parseInt(m)));
  function f(s, t, ar) {
    if (t < 0) return;
    if (t === 0) {
      rset.add(s);
      return;
    }
    for (let i = 0; i < ar.length; i++) {
      f(s + '_' + ar[i], t - ar[i], ar.slice(i + 1));
    }
  }
};