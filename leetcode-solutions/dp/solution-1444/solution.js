/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
  let dp = {};
  let mod = 10**9 + 7;
  return helper(0, 0, k);

  function helper(x, y, k) {
    if (x >= pizza.length || y >= pizza[0].length) return 0;
    if (k === 1) {
      for (let i = x; i < pizza.length; i++) for (let j = y; j < pizza[0].length; j++) if (pizza[i][j] === 'A') return 1;
      return 0;
    }
    let key = [x, y, k].toString();
    if (dp[key] !== undefined) return dp[key];
    dp[key] = 0;
    let apple = false;
    for (let i = x; i < pizza.length; i++) {
      for (let j = y; j < pizza[0].length; j++) if (pizza[i][j] === 'A') apple = true;
      if (apple) dp[key] = (dp[key] + helper(i + 1, y, k - 1)) % mod;
    }
    apple = false;
    for (let j = y; j < pizza[0].length; j++) {
      for (let i = x; i < pizza.length; i++) if (pizza[i][j] === 'A') apple = true;
      if (apple) dp[key] = (dp[key] + helper(x, j + 1, k - 1)) % mod;
    }
    return dp[key];
  }
};