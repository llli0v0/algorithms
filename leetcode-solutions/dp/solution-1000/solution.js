/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
var mergeStones = function(stones, K) {
  let C = {};
  let S = {};
  let dp = {};

  let a = helper(0, stones.length - 1);

  return a === -1 ? -1 : a[1];

  function helper(s, e) {
    if (s === e) return [stones[s], 0];

    let key = [s, e].toString();

    let N = 0;

    if (S[key] !== undefined) {
      N = S[key];
    } else {
      for (let i = s; i <= e; i++) N += stones[i];
      S[key] = N;
    }

    if (dp[key] !== undefined) return [N, dp[key]];

    dp[key] = Infinity;

    let l = e - s + 1;
    let compose;

    if (C[l] === undefined) {
      C[l] = [];
      getCompose(l, K, [], l);
    }

    compose = C[l];

    for (let i = 0; i < compose.length; i++) {
      let c = compose[i];

      let cur = s;

      let a = 0;

      for (let j = 0; j < c.length; j++) {
        let b = helper(cur, cur + c[j] - 1);

        if (b === -1) {
          a += Infinity;
        } else {
          a += b[0] + b[1];
        }

        cur += c[j];
      }

      dp[key] = Math.min(dp[key], a);
    }

    if (dp[key] > 10**9) return -1;

    return [N, dp[key]];
  }

  function getCompose(L, k, c, l) {
    if (k === 0) {
      if (L === 0) {
        C[l].push(c);
      }
      return;
    }

    for (let i = 1; i <= L; i++) {
      if (check(i)) {
        getCompose(L - i, k - 1, c.concat([i]), l);
      }
    }

    function check(n) {
      while (n > 1) n = n - K + 1;
      return n === 1;
    }
  }
};