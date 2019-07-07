/**
 * @param {number} N
 * @return {number}
 */
var confusingNumberII = function(N) {
  let A = [0, 1, 6, 8, 9];

  let S = new Set();
  
  let len;
  let result;

  if (String(N).length > 9) {
    len = 9;
    result = 1;
  } else {
    len = String(N).length;
    result = 0;
  }
  
  helper(0, '');
  return result;

  function helper(n, s) {
    if (n > len) return;

    let num = parseInt(s);

    if (num <= N && !S.has(num) && isValid(s)) {
      result++;
      S.add(num);
    }

    for (let i = 0; i < A.length; i++) {
      helper(n + 1, A[i] + s);
    }
  }

  function isValid(s) {
    s = String(parseInt(s));

    let M = {
      0: 0,
      1: 1,
      6: 9,
      8: 8,
      9: 6
    };

    let a = '';
    for (let i = 0; i < s.length; i++) {
      a = M[s[i]] + a;
    }
    return a !== s;
  }
};