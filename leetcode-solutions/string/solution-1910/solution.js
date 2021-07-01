/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
  let times = 1000;
  while (times) {
    s = s.replace(part, '');
    times--;
  }
  return s;
};