/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function(s, t) {
  let leftMatch = { '-1': -1 };
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[p]) {
      leftMatch[p] = i;
      p++;
    }
  }
  let rightMatch = { [t.length]: s.length };
  p = t.length - 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t[p]) {
      rightMatch[p] = i;
      p--;
    }
  }
  let l = 0;
  let r = t.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let f = false;
    for (let i = m - 1; i < t.length; i++) {
      let [a, b] = [leftMatch[i - m], rightMatch[i + 1]];
      if (a !== undefined && b !== undefined && a < b) {
        f = true;
        break;
      }
    }
    if (f) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
