/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) p2++;
    p1++;
  }
  return t.length - p2;
};
