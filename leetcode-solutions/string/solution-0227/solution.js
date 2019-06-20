/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let S = [];
  let q = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') q += s[i];
  }
  s = q;
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(parseInt(s[i]))) {
      let a = i;
      while (Number.isInteger(parseInt(s[i]))) i++;
      S.push(s.slice(a, i));
      i -= 1;
    } else {
      S.push(s[i]);
    }
    helper(S, i);
  }
  helper(S, s.length);
  return S[0];

  function helper(S, i) {
    while (
      (S.length === 3 || S.length === 5) &&
      (
        S[S.length - 2] === '*' ||
        S[S.length - 2] === '/' ||
        (s[i + 1] !== '*' && s[i + 1] !== '/')
      )
    ) {
      let A = S.splice(S.length - 3, 3);
      A[0] = parseInt(A[0]);
      A[2] = parseInt(A[2]);
      if (A[1] === '+') {
        A = [A[0] + A[2]];
      } else if (A[1] === '-') {
        A = [A[0] - A[2]];
      } else if (A[1] === '*') {
        A = [A[0] * A[2]];
      } else {
        A = [Math.floor(A[0] / A[2])];
      }
      S.push(A[0]);
    }
  }
};