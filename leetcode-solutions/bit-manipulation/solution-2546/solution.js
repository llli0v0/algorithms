/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, target) {
  s = s.split('');
  target = target.split('');
  if (s.every(i => i === '0') && target.some(i => i === '1') || s.some(i => i === '1') && target.every(i => i === '0')) return false;
  return true;
};
