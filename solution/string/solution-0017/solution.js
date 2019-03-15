/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  digits = String(digits);
  let S = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }, result = [];
  next('', 0);
  return result;
  function next(s, index) {
    let current = S[digits[index]];
    for (let i = 0; i < current.length; i++) {
      if (index === digits.length - 1) {
        result.push(s + current[i]);
      } else {
        next(s + current[i], index + 1);
      }
    }
  }
};

letterCombinations('23');