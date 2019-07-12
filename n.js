/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  return helper(expression);
  
  function helper(S) {
    if (S === '') return [];

    let s = S.indexOf('{');

    if (s === -1) {
      return [...new Set(S.split(','))];
    }

    let e;
    
    for (let i = s + 1; i < S.length; i++) {
      if (S[i] === '}') {
        e = i;
        break;
      }
    }

    let a = helper(S.slice(s + 1, e));
    let b = helper(S.slice(e + 1));

    if (s > 0) {
      let c = S.slice(0, s);
      for (let i = 0; i < a.length; i++) {
        a[i] = c + a[i];
      }
    }

    let result = new Set();

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        result.add(a[i] + b[j]);
      }
    }

    return [...result];
  }
};