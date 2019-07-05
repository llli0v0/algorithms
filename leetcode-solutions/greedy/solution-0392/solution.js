/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  let point = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[point]) {
      point++;
      if (point === s.length) return true;
    }
  }
  return false;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequenceII = function(s, t) {
  let I = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[I]) I++;
  }
  return I === s.length;
};