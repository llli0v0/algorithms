/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let a = 0;
  let b = [];
  for (let i = shifts.length - 1; i >= 0; i--) {
    b.unshift(shifts[i] + a);
    a += shifts[i];
  }
  let result = '';
  for (let i = 0; i < S.length; i++) {
    let a = S[i].charCodeAt() - 96;
    let c = b[i] - (26 - a + 1);
    if (c < 0) {
      result += String.fromCharCode(a + 96 + b[i]);
    } else {
      result += String.fromCharCode(c % 26 + 97);
    }
  }
  return result;
};