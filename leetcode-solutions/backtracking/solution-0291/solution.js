/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str) {
  return helper(pattern, str, {});
  
  function helper(p, s, m) {
    if (p === '' && s === '') {
      let S = new Set();
      for (let k in m) {
        if (S.has(m[k])) return false;
        S.add(m[k]);
      }
      return true;
    }
    if (p === '' && s !== '' || p !== '' && s === '') return false;

    if (m[p[0]] !== undefined) {
      let a = s.indexOf(m[p[0]]);
      if (a === 0) {
        return helper(p.slice(1), s.slice(m[p[0]].length), m);
      }
      return false;
    } else {
      let f = false;
      for (let i = 0; i < s.length; i++) {
        let n = {...m};
        n[p[0]] = s.slice(0, i + 1);
        if (helper(p.slice(1), s.slice(i + 1), n)) f = true;
      }
      return f;
    }
  }
};