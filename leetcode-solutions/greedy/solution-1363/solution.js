/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  let sum = digits.reduce((a, b) => a + b);
  digits.sort((a, b) => b - a);
  if (sum % 3 === 0) {
    let s = digits.join('');
    if (s[0] === '0') return '0';
    return s;
  }
  if (sum % 3 === 1) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 === 1) {
        digits.splice(i, 1);
        let s = digits.join('');
        if (s[0] === '0') return '0';
        return s;
      }
    }
    let arr = [];
    let c = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 === 2) {
        c++;
        if (c === 2) {
          arr = digits.slice(0, i).concat(arr);
          let s = arr.join('');
          if (s[0] === '0') return '0';
          return s;
        }
      } else {
        arr.unshift(digits[i]);
      }
    }
  }
  if (sum % 3 === 2) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 === 2) {
        digits.splice(i, 1);
        let s = digits.join('');
        if (s[0] === '0') return '0';
        return s;
      }
    }
    let arr = [];
    let c = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] % 3 === 1) {
        c++;
        if (c === 2) {
          arr = digits.slice(0, i).concat(arr);
          let s = arr.join('');
          if (s[0] === '0') return '0';
          return s;
        }
      } else {
        arr.unshift(digits[i]);
      }
    }
  }
};