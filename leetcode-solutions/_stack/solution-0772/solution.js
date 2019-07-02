/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let e = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') e += s[i];
  }
  s = e;
  let S = [];
  s += '#';
  if (s[0] === '+' || s[0] === '-') s = '0' + s;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      S.push(s[i]);
      if (s[i + 1] === '+' || s[i + 1] === '-') S.push('0');
    } else if (Number.isInteger(parseInt(s[i]))) {
      if (Number.isInteger(parseInt(S[S.length - 1]))) {
        S[S.length - 1] += s[i];
      } else {
        S.push(s[i]);
      }
    } else {
      if (S[S.length - 2] === '*') {
        let a = S.pop();
        S.pop();
        let b = S.pop();
        S.push(String(parseInt(a) * parseInt(b)));
      } else if (S[S.length - 2] === '/') {
        let a = S.pop();
        S.pop();
        let b = S.pop();
        S.push(String(Math.floor(parseInt(b) / parseInt(a))));
      }
      if (s[i] === ')') {
        S.push((helper(S)));
      } else if (s[i] !== '#') {
        S.push(s[i]);
      }
    }
  }
  return parseInt(helper(S));


  function helper(S) {
    let n = [];
    while (true) {
      let a = S.pop();
      n.unshift(a);
      if (a === '(' || S.length === 0) break;
    }
    if (n[0] === '(') n.shift();
    while (n.length > 1) {
      let a = n.shift();
      let c = n.shift();
      let b = n.shift();
      if (c === '-') {
        n.unshift(String(parseInt(a) - parseInt(b)));
      } else {
        n.unshift(String(parseInt(a) + parseInt(b)));
      }
    }
    return n[0];
  }
};