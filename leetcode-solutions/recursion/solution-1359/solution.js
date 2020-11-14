let mod = 10n**9n + 7n;
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
  if (n === 1) return 1n;
  return BigInt(n * (2 * (n - 1) + 1)) * countOrders(n - 1) % mod;
};