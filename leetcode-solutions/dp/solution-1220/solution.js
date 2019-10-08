/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  let dp = {};
  let mod = 10 ** 9 + 7;

  dp[1] = { a: 1, e: 1, i: 1, o: 1, u: 1 };

  helper(n);

  return (dp[n].a + dp[n].e + dp[n].i + dp[n].o + dp[n].u) % mod;

  function helper(n) {
    if (dp[n]) return dp[n];

    dp[n] = {};

    let A = helper(n - 1);

    dp[n].a = A.e % mod;
    dp[n].e = (A.a + A.i) % mod;
    dp[n].i = (A.a + A.e + A.o + A.u) % mod;
    dp[n].o = (A.i + A.u) % mod;
    dp[n].u = A.a % mod;

    return dp[n];
  }
};