/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
  let mod = 10n**20n + 7n;
  let l = 0;
  let r = s.length;
  let result;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let sub = 0n;
    let subStrs = new Set();
    let n = 1n;
    for (let i = 0; i < m; i++) {
      sub = (sub * 26n + BigInt(s.charCodeAt(i)) - 97n) % mod;
      n = n * 26n % mod;
    }
    subStrs.add(sub);
    let hasDup = false;
    for (let i = 1; i + m - 1 < s.length; i++) {
      sub = (sub * 26n + 26n * mod - (BigInt(s.charCodeAt(i - 1)) - 97n) * n + BigInt(s.charCodeAt(i + m - 1)) - 97n) % mod;
      if (subStrs.has(sub)) {
        hasDup = true;
        result = s.slice(i, i + m);
        break;
      }
      subStrs.add(sub);
    }
    if (hasDup) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return result;
};