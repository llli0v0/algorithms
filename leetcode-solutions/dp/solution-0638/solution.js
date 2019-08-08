/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  let dp = {};

  let a = 0;

  for (let i = 0; i < needs.length; i++) a += needs[i] * price[i];

  return Math.min(helper(needs), a);

  function helper(needs) {
    let k = needs.toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = Infinity;

    for (let i = 0; i < special.length; i++) {
      let n = [...needs];
      let s = special[i];

      for (let j = 0; j < s.length - 1; j++) {
        n[j] -= s[j];
      }

      if (n.some(item => item < 0)) continue;

      let a = 0;

      for (let j = 0; j < n.length; j++) a += n[j] * price[j];

      dp[k] = Math.min(dp[k], Math.min(helper(n), a) + s[s.length - 1]);
    }

    return dp[k];
  }
};