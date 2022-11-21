/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
var beautifulPartitions = function(s, k, minLength) {
  let a = ['2', '3', '5', '7'];
  let b = ['1', '4', '6', '8', '9'];
  if (a.indexOf(s[0]) === -1 || b.indexOf(s[s.length - 1]) === -1) return 0;
  let dp = new Array(s.length + 1).fill(null).map(() => new Array(k + 1).fill(undefined));
  let mod = 10**9 + 7;
  return helper(s.length, k);
  
  function helper(index, k) {
    if (k === 1 && index + 1 >= minLength) return 1;
    if (dp[index][k] !== undefined) return dp[index][k];
    let val = 0;
    for (let i = index - minLength; i >= (k - 1) * minLength; i--) {
      if (a.indexOf(s[i]) !== -1 && b.indexOf(s[i - 1]) !== -1) {
        val += helper(i, k - 1);
        val %= mod;
      }
    }
    dp[index][k] = val;
    return val;
  }
};
