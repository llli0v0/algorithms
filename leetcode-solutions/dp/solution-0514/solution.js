/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  let m = {};
  let dp = {};
  let result = Infinity;
  for (let i = 0; i < ring.length; i++) {
    if (key.indexOf(ring[i]) > -1) {
      if (m[ring[i]] === undefined) m[ring[i]] = [];
      m[ring[i]].push(i);
    }
  }
  let a = m[key[key.length - 1]];
  for (let i = 0; i < a.length; i++) {
    result = Math.min(result, helper(a[i], key.length - 2) + 1);
  }
  return result;

  function helper(t, n) {
    let k = t + ' ' + n;
    let a = Infinity;
    if (dp[k] !== undefined) return dp[k];
    if (n === -1) {
      a = Math.min(a, Math.abs(t - 0), ring.length - Math.abs(t - 0));
    } else {
      let c = m[key[n]];
      for (let i = 0; i < c.length; i++) {
        let b = helper(c[i], n - 1);
        a = Math.min(a, Math.abs(c[i] - t) + b + 1, ring.length - Math.abs(c[i] - t) + b + 1);
      }
    }
    dp[k] = a;
    return a;
  }
};