/**
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
var numMusicPlaylists = function(N, L, K) {
  let dp = {};
  let mod = 10 ** 9 + 7;

  return helper(N, L);

  function helper(s, p) {
    if (s < 0 || p < 0) return 0;
    if (s === p) return factorial(s) % mod;

    let k = [s, p].toString();

    if (dp[k] !== undefined) return dp[k];

    let a = helper(s - 1, p - 1) * s % mod;
    let b = helper(s, p - 1) * (s - K) % mod;

    dp[k] = ((a < 0 ? 0 : a) + (b < 0 ? 0 : b)) % mod;

    return dp[k];
  }

  function factorial(n) {
    let r = 1;

    for (let i = 1; i <= n; i++) r = r * i % mod;

    return r;
  }
};