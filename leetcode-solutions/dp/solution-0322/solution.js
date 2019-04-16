/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let sub = { 0: 0 };
  let min = Math.min(...coins);
  sub[min] = 1;
  for (let i = min; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (sub[i - coins[j]] === undefined) continue;
      if (sub[i] === undefined) {
        sub[i] = 1 + sub[i - coins[j]];
      } else {
        sub[i] = Math.min(sub[i], 1 + sub[i - coins[j]]);
      }
    }
  }
  return sub[amount] === undefined ? -1 : sub[amount];
};