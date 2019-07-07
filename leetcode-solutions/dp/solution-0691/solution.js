/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  let A = {};

  let S = new Set();
  for (let i = 0; i < target.length; i++) {
    S.add(target[i]);
    if (A[target[i]] === undefined) A[target[i]] = 0;
    A[target[i]]++;
  }

  let C = new Set();

  for (let i = 0; i < stickers.length; i++) {
    let c = {};
    for (let j = 0; j < stickers[i].length; j++) {
      let s = stickers[i][j];
      if (S.has(s)) {
        C.add(s);
        if (c[s] === undefined) c[s] = 0;
        c[s]++;
      }
    }
    stickers[i] = c;
  }

  if (C.size < Object.keys(A).length) return -1;

  let dp = {};

  let k = target.split('').sort().join('');
  let result = helper(A, k);
  return result;

  function helper(a, s) {
    if (Object.keys(a).length === 0) return 0;
    if (dp[s] !== undefined) return dp[s];

    let result;

    for (let i = 0; i < stickers.length; i++) {
      let b = {...a};
      let f = false;
      for (let k in b) {
        if (stickers[i][k] !== undefined) {
          b[k] -= stickers[i][k];
          f = true;
        }
        if (b[k] <= 0) delete b[k];
      }

      if (!f) continue;

      let n = [];
      for (let k in b) {
        n = n.concat(new Array(b[k]).fill(k));
      }
      n = n.sort().join('');
      
      if (result === undefined) {
        result = 1 + helper(b, n);
      } else {
        result = Math.min(result, 1 + helper(b, n));
      }
    }

    dp[s] = result;
    return dp[s];
  }
};