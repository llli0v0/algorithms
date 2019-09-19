/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function(target, dictionary) {
  let M = {};

  if (!dictionary.length) return target.length.toString();

  helper(target, []);

  for (let i = 1; i <= target.length; i++) {  
    for (let j = 0; j < M[i].length; j++) {
      let p = M[i][j]

      for (let n = 0; n < dictionary.length; n++) {
        let s = dictionary[n];

        if (isMatch(p, s) && target.length === s.length) break;
        if (n === dictionary.length - 1) return p.join('');
      }
    }
  }

  function isMatch(p, s) {
    for (let i = 0; i < p.length; i++) {
      if (isWord(p[i])) {
        if (p[i] !== s[0]) return false;
        s = s.slice(1);
      } else {
        s = s.slice(p[i]);
      }
    }
    return true;
  }

  function helper(target, A) {
    if (!target.length) {
      if (M[A.length] === undefined) M[A.length] = [];
      M[A.length].push(A);
      return;
    }

    helper(target.slice(1), A.concat([target[0]]));

    if (isWord(A[A.length - 1]) || !A.length) {
      helper(target.slice(1), A.concat([1]));
    } else {
      let a = [...A];
      a[a.length - 1]++;
      
      helper(target.slice(1), a);
    }
  }

  function isWord(a) {
    return a >= 'a' && a <= 'z';
  }
};