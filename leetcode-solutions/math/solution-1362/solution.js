/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
  let res;
  for (let i = 1, t = Math.floor(Math.sqrt(num + 2)); i <= t; i++) {
    let m;
    if ((m = (num + 1) / i) % 1 === 0) {
      res = [i, m];
    } else if ((m = (num + 2) / i) % 1 === 0) {
      res = [i, m];
    }
  }
  return res;
};
