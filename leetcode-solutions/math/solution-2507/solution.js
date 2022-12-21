/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
  return helper(n);

  function helper(n) {
    let o = n;
    if (check(n)) return n;
    let m = 0;
    while (n > 1) {
      for (let i = 2, e = Math.sqrt(n); i <= e; i++) {
        if (check(i) && n % i === 0) {
          m += i;
          n /= i;
          break;
        }
      }
      if (n > 1 && check(n)) {
        m += n;
        n = 1;
        break;
      }
    }
    if (m === o) return m;
    return helper(m);
  }

  function check(n) {
    for (let i = 2; i < n; i++) {
      if (n / i % 1 === 0) return false;
    }
    return true;
  }
};
