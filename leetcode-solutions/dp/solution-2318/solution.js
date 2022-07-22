/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function(n) {
  if (n === 1) return 6;
  else if (n === 2) return 22;
  let mod = 10**9 + 7;
  let res = 0;
  let dp = {};
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      if (i !== j && gcd(i, j) === 1) {
        res = (res + helper(n - 2, `${i}${j}`)) % mod;
      }
    }
  }
  return res;
  function gcd(a, b) {
    if (b === 0) return a;
    let c = a % b;
    return b > c ? gcd(b, c) : gcd(c, b);
  }
  function helper(n, k) {
    if (n === 0) return 1;
    let key = `${n} ${k}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = 0;
    let [a, b] = [parseInt(k[0]), parseInt(k[1])]
    for (let i = 1; i <= 6; i++) {
      if (i !== a && i !== b && gcd(i, a) === 1) {
        dp[key] = (dp[key] + helper(n - 1, `${i}${a}`)) % mod;
      }
    }
    return dp[key];
  }
};
