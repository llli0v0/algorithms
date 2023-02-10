/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  banned = new Set(banned);
  let sum = 0;
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (banned.has(i)) continue;
    if (sum + i <= maxSum) {
      res++;
      sum += i;
    } else break;
  }
  return res;
};
