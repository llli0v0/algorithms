/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function(statements) {
  let result = 0;
  for (let i = 0; i < (1 << statements.length); i++) {
    let s = i.toString(2);
    s = new Array(statements.length - s.length).fill(0).join('') + s;
    if (helper(s)) {
      result = Math.max(result, s.split('').filter(item => item === '1').length);
    }
  }
  return result;

  function helper(s) {
    for (let i = 0; i < statements.length; i++) {
      for (let j = 0; j < statements[i].length; j++) {
        if (i !== j) {
          let r = statements[i][j];
          if (r === 0) {
            if (s[i] === '1' && s[j] === '1') {
              return false;
            }
          } else if (r === 1) {
            if (s[i] === '1' && s[j] === '0') {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
};