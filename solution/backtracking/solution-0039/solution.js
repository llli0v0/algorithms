/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let rset = new Set();
  for (let i = 0; i < candidates.length; i++) {
    let cc = 1;
    while (cc * candidates[i] <= target) {
      f(new Array(cc).fill(candidates[i]).join('_'), target - cc * candidates[i], candidates.slice(i + 1));
      cc++;
    }
  }
  return Array.from(rset).map(i => i.split('_').map(m => parseInt(m)));
  function f(s, t, ar) {
    if (t === 0) {
      let a = s.split('_'), mm = [];
      for (let i = 0; i < a.length; i++) {
        if (a[i]) mm.push(parseInt(a[i]));
      }
      rset.add(mm.join('_'));
      return;
    }
    for (let i = 0; i < ar.length; i++) {
      let cc = 1;
      while (cc * ar[i] <= t) {
        f(s + '_' + new Array(cc).fill(ar[i]).join('_'), t - cc * ar[i], ar.slice(i + 1));
        cc++;
      }
    }
  }
};

console.log(combinationSum([48,22,49,24,26,47,33,40,37,39,31,46,36,43,45,34,28,20,29,25,41,32,23], 69));