/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  return helper(expression).sort();

  function helper(S) {
    if (S === '') return [];

    let result = [];

    let blocks = getBlocks(S);
    if (blocks.length > 1) {
      for (let i = 0; i < blocks.length; i++) {
        result = result.concat(helper(blocks[i]));
      }
      return [...new Set(result)];
    }

    if (/[a-z]/.test(S[0])) {
      let a = 0;
      while (/[a-z]/.test(S[a]) && a < S.length) a++;

      if (a === S.length) return [S];
      
      let b = helper(S.slice(a));

      a = S.slice(0, a);

      for (let i = 0; i < b.length; i++) {
        result.push(a + b[i]);
      }
    } else {
      let a = 1;
      let m = 1;

      while (true) {
        if (S[a] === '{') m++;
        if (S[a] === '}') m--;
        if (m === 0) break;
        a++;
      }

      let b = helper(S.slice(1, a));
      let c = helper(S.slice(a + 1));

      if (c.length) {
        let d = [];
        for (let i = 0; i < b.length; i++) {
          for (let j = 0; j < c.length; j++) {
            d.push(b[i] + c[j]);
          }
        }
        result = d;
      } else {
        result = b;
      }
    }

    return [...new Set(result)];
  }

  function getBlocks(S) {
    let s = '';
    let m = 0;
    let b = [];
    for (let i = 0; i < S.length; i++) {
      if (S[i] === '{') m++;
      if (S[i] === '}') m--;
      if (S[i] === ',' && m === 0) {
        b.push(s);
        s = '';
      } else {
        s += S[i];
      }
    }
    b.push(s);
    return b;
  }
};