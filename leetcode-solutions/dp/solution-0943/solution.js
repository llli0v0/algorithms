/**
 * @param {string[]} A
 * @return {string}
 */
var shortestSuperstring = function(A) {
  if (A.length === 1) return A[0];

  let G = new Array(A.length).fill(null).map(() => new Array(A.length).fill(0));

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let a = A[i];
      let b = A[j];
      for (let n = 0; n < a.length; n++) {
        if (b.indexOf(a.slice(n)) === 0) {
          G[i][j] = a.length - n;
          break;
        }
      }
      for (let n = 0; n < b.length; n++) {
        if (a.indexOf(b.slice(n)) === 0) {
          G[j][i] = b.length - n;
          break;
        }
      }
    }
  }

  if (A.length === 2) {
    let a = A[0] + A[1].slice(G[0][1]);
    let b = A[1] + A[0].slice(G[1][0]);
    return a.length > b.length ? b : a;
  }

  let R = [-Infinity, []];

  for (let i = 0; i < A.length; i++) startWith(i);

  R = R[1];

  let result = A[R[0]];

  for (let i = 1; i < R.length; i++) {
    result += A[R[i]].slice(G[R[i - 1]][R[i]]);
  }

  return result;

  function startWith(S) {
    let B = [];
    let M = {};

    for (let i = 0; i < G.length; i++) {
      if (i !== S) B.push(i);
    }

    helper(B, []);

    let dp = {};

    for (let i = 0; i < B.length; i++) {
      let k = (1 << B[i]) + (1 << S);

      dp[k] = [G[S][B[i]], [S, B[i]]];
    }

    for (let i = 2; i < G.length; i++) {
      for (let j = 0; j < M[i].length; j++) {
        let a = M[i][j];
        
        let K = 1 << S;

        for (let m = 0; m < a.length; m++) K += 1 << a[m];

        dp[K] = [-Infinity, []];

        for (let m = 0; m < a.length; m++) {
          let k = K - (1 << a[m]);

          let v = dp[k][0] + G[dp[k][1][dp[k][1].length - 1]][a[m]];
          let s = dp[k][1].concat(a[m]);
  
          if (v > dp[K][0]) dp[K] = [v, s];
  
          if (i === G.length - 1 && v > R[0]) R = [v, s];
        }
      }
    }

    function helper(A, C) {
      if (!A.length) return M[C.length] === undefined ? M[C.length] = [C] : M[C.length].push(C);
  
      helper(A.slice(1), C.concat([A[0]]));
      helper(A.slice(1), C);
    }
  }
};