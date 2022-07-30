/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
  let arr = new Array(forget).fill(0);
  let mod = 10**9 + 7;
  arr[0] = 1;
  while (n - 1) {
    let ne = 0;
    for (let i = delay - 1; i < forget - 1; i++) {
      ne = (ne + arr[i]) % mod;
    }
    arr.unshift(ne);
    arr.pop();
    n--;
  }
  return arr.reduce((pre, cur) => (pre + cur) % mod);
};
