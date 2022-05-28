/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
  let map = {
    '0': 0,
    '1': 0,
    '10': 0,
    '01': 0,
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      result += map['01'];
      map['10'] += map['1'];
      map['0'] += 1;
    } else {
      result += map['10'];
      map['01'] += map['0'];
      map['1'] += 1;
    }
  }
  return result;
};