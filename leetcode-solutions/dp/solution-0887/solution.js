/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  let dp = {};
  return helper(k, n);

  function helper(k, n) {
    if (k === 1) return n;
    else if (n === 0) return 0;
    let key = `${k} ${n}`;
    if (dp[key] !== undefined) return dp[key];
    let l = 1;
    let r = n;
    while (l + 1 < r) {
      let m = Math.floor((l + r) / 2);
      let a = helper(k - 1, m - 1);
      let b = helper(k, n - m);
      if (a > b) {
        r = m;
      } else if (b > a) {
        l = m;
      } else {
        l = r = m;
      }
    }
    return dp[key] = 1 + Math.min(Math.max(helper(k, n - l), helper(k - 1, l - 1)), Math.max(helper(k, n - r), helper(k - 1, r - 1)));
  }
};
