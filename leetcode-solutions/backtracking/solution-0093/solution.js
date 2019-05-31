/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length > 12) return [];
  let result = [];
  for (let i = 1; i <= 3; i++) {
    if (Number(s.slice(0, i)) < 256 && (i === 1 || s[0] !== '0')) {
      helper(s.slice(i), 1, s.slice(0, i) + '.');
    }
  }
  return result;
  function helper(s, p, str) {
    if (!s) return;
    if (p === 3 && s.length && s.length <= 3 && Number(s) < 256 && (s.length === 1 || s[0] !== '0')) {
      result.push(str + s);
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (Number(s.slice(0, i)) < 256 && (i === 1 || s[0] !== '0')) {
        helper(s.slice(i), p + 1, str + s.slice(0, i) + '.');
      }
    }
  }
};