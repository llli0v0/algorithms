/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
  if (k > 1) {
    return s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  }
  let min = s;
  for (let i = 0; i < s.length; i++) {
    let cur = s.slice(i) + s.slice(0, i);
    for (let j = 0; j < cur.length; j++) {
      if (cur[j].charCodeAt() < min[j].charCodeAt()) {
        min = cur;
        break;
      }
      if (cur[j] !== min[j]) break;
    }
  }
  return min;
};
