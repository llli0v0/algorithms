/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
  if (n <= 1) return n;
  return Math.min(
    n % 2 ? minDays((n - 1) / 2) + 2 : minDays(n / 2) + 1,
    n % 3 ? minDays(n - n % 3 - (n - (n % 3)) / 3 * 2) + n % 3 + 1 : minDays(n - n / 3 * 2) + 1
  );
};