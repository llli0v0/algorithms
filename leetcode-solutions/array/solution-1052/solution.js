/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let noAngery = 0;
  for (let i = 0; i < customers.length; i++) {
    if (!grumpy[i]) {
      noAngery += customers[i];
    }
  }
  let windowCut = 0;
  for (let i = 0; i < X; i++) {
    if (grumpy[i]) {
      windowCut += customers[i];
    }
  }
  let result = noAngery + windowCut;
  for (let i = 1; i < customers.length - X + 1; i++) {
    if (grumpy[i - 1]) windowCut -= customers[i - 1];
    if (grumpy[i + X - 1]) windowCut += customers[i + X - 1];
    result = Math.max(result, noAngery + windowCut);
  }
  return result;
};