/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  let res = 0;
  let mod = 10**9 + 7;
  let dp = new Array(n).fill(null).map(item => new Array(6).fill(null).map(it => new Array(15).fill(undefined)));
  for (let i = 1; i <= 6; i++) {
    res += helper(n - 1, i, 1);
    res %= mod;
  }
  return res;

  function helper(n, tail, count) {
    if (n === 0) return 1;
    let res = dp[n - 1][tail - 1][count - 1];
    if (res !== undefined) return res;
    res = 0;
    for (let i = 1; i <= 6; i++) {
      if (i === tail) {
        if (count + 1 <= rollMax[i - 1]) res += helper(n - 1, i, count + 1);
      } else {
        res += helper(n - 1, i, 1);
      }
      res %= mod;
    }
    return dp[n - 1][tail - 1][count - 1] = res;
  }
};
