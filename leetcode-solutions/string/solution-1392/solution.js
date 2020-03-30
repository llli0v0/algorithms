/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
  let l = 0;
  let r = 0;
  let mod = 10**9 + 7;
  let n = 1;
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    l = (l * 2 % mod + s[i].charCodeAt() - 96) % mod;
    r = (r + (s[s.length - 1 - i].charCodeAt() - 96) * n) % mod;
    n = n * 2 % mod;
    if (l === r) result = i + 1;
  }

  return s.slice(0, result);
};