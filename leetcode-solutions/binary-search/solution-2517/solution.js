/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
  let l = 0;
  let r = 10**9;
  price.sort((a, b) => a - b);
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let c = k - 1;
    let cur = price[0];
    for (let i = 1; i < price.length; i++) {
      let p = price[i];
      if (p - cur >= m) {
        cur = p;
        c--;
      }
    }
    if (c <= 0) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  return l;
};
