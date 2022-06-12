/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function(s, sub, mappings) {
  let map = {};
  for (let i = 0; i < mappings.length; i++) {
    let [a, b] = mappings[i];
    if (map[a] === undefined) map[a] = new Set();
    map[a].add(b);
  }
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < sub.length) return false;
    for (let j = 0; j < sub.length; j++) {
      if (!(s[i + j] === sub[j] || (map[sub[j]] && map[sub[j]].has(s[i + j])))) break;
      if (j === sub.length - 1) return true;
    }
  }
  return false;
};
