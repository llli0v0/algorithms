/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  s1 = s1.split('').sort();
  s2 = s2.split('').sort();
  let f = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] < s2[i]) break;
    if (i === s1.length - 1) f = true;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] > s2[i]) break;
    if (i === s1.length - 1) f = true;
  }
  return f;
};