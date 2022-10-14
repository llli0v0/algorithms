/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
  let l = 0;
  let r = 10**9;
  let res;
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let count = 0;
    let cur = 0;
    let min = Infinity;
    for (let i = 0; i < sweetness.length; i++) {
      cur += sweetness[i];
      if (cur >= m) {
        min = Math.min(min, cur);
        count++;
        cur = 0;
      }
    }
    if (count >= k + 1) {
      l = m;
      res = min;
    } else {
      r = m - 1;
    }
  }
  return res;
};
