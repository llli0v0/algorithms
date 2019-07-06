/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
  let M = {};
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[0].length; j++) {
      let k = words[i].slice(0, j + 1);
      if (M[k] === undefined) {
        M[k] = [];
      }
      M[k].push(words[i]);
    }
  }

  let result = [];
  for (let i = 0; i < words.length; i++) {
    helper([words[i]]);
  }
  return result;
  
  function helper(S) {
    if (S.length === words[0].length) {
      let W = [];
      for (let i = 0; i < S.length; i++) {
        let w = '';
        for (let j = 0; j < S.length; j++) {
          w += S[j][i];
        }
        W.push(w);
      }
      for (let i = 0; i < W.length; i++) {
        if (W[i] !== S[i]) return;
      }
      result.push(S);
      return;
    }

    let k = '';
    for (let i = 0; i < S.length; i++) {
      k += S[i][S.length];
    }

    let A = M[k];
    
    if (A === undefined) return;

    for (let i = 0; i < A.length; i++) {
      helper(S.concat([A[i]]));
    }
  }
};