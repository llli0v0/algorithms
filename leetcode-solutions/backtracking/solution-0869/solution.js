/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
  N = String(N);
  let C = {};
  let result = false;
  for (let i = 0; i < N.length; i++) {
    if (C[N[i]] === undefined) C[N[i]] = 0;
    C[N[i]] += 1;
  }
  helper(C);
  return result;

  function helper(C, S = '') {
    if (S.length === N.length && S[0] !== '0' && Number.isInteger(Math.log2(parseInt(S)))) result = true;
    for (let key in C) {
      let c = { ...C };
      c[key] -= 1;
      if (c[key] === 0) delete c[key];
      helper(c, S + key);
    }
  }
};