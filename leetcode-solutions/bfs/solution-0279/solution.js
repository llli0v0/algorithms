/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let ne = [];
  let xt = [];
  let result = 1;
  let s = Math.floor(Math.sqrt(n));
  if (n === 1) return 1;
  for (let i = s; i >= 1; i--) {
    if (n - i ** 2 === 0) return 1;
    ne.push([i ** 2, n - i ** 2]);
  }
  while (ne.length) {
    let cur = ne.shift();
    let s = Math.floor(Math.sqrt(cur[1]));
    for (let i = s; i >= 1; i--) {
      if (cur[1] - i ** 2 === 0) {
        return result + 1;
      }
      xt.push([i ** 2, cur[1] - i ** 2]);
    }
    if (!ne.length) {
      ne = [...xt];
      xt = [];
      result++;
    }
  }
};