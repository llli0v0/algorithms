/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
  let preSum = [customers[0] === 'Y' ? 1 : 0];
  for (let i = 1; i < customers.length; i++) {
    let c = customers[i];
    let d = preSum[preSum.length - 1];
    preSum.push(d + (c === 'Y' ? 1 : 0));
  }
  let res = 0;
  let min = preSum[preSum.length - 1];
  for (let i = 1; i <= customers.length; i++) {
    let t = i - preSum[i - 1] + preSum[preSum.length - 1] - preSum[i - 1];
    if (t < min) {
      res = i;
      min = t;
    }
  }
  return res;
};
