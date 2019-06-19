/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  let result;
  for (let i = 0; i < S.length; i++) {
    helper(S.slice(i + 1), S.slice(0, i + 1) + ' ', parseInt(S.slice(0, i + 1)));
  }
  if (result) {
    let a = result.split(' ').map(i => parseInt(i));
    if (a.every(i => i >= 0 && i <= 2**31 - 1)) return a;
    return [];
  } else {
    return [];
  }

  function helper(s, t, a, b) {
    if (result) return;
    if (
      !s && t.split(' ').length > 3 &&
      t.slice(0, t.length - 1).split(' ').every(i => i.length === 1 || i[0] !== '0')
    ) {
      result = t.slice(0, t.length - 1);
    }
    for (let i = 0; i < s.length; i++) {
      let c = s.slice(0, i + 1);
      if (a !== undefined && b !== undefined) {
        if (a + b < parseInt(c)) {
          return;
        } else if (a + b === parseInt(c)) {
          helper(s.slice(i + 1), t + c + ' ', b, a + b);
        }
      } else {
        helper(s.slice(i + 1), t + c + ' ', a, parseInt(c));
      }
    }
  }
};