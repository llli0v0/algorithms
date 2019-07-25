/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  if (graph.length <= 2) return graph.length - 1;

  let G = new Array(graph.length).fill(null).map(() => new Array(graph.length).fill(0));

  buildG();

  let A = [];
  for (let i = 0; i < graph.length; i++) A.push(i);

  let result = Infinity;

  for (let i = 0; i < graph.length; i++) startAt(i);

  return result;
  
  function startAt(S) {
    let B = [...A];
    B.splice(S, 1);

    let M = {};

    helper(B, []);
    
    let dp = {};

    for (let i = 0; i < B.length; i++) dp[(1 << S) + (1 << B[i])] = [G[S][B[i]], B[i]];

    for (let i = 2; i <= B.length; i++) {
      for (let j = 0; j < M[i].length; j++) {
        let a = M[i][j];
        let K = 1 << S;
        
        for (let n = 0; n < a.length; n++) K += 1 << a[n];

        dp[K] = [Infinity, 0];

        for (let n = 0; n < a.length; n++) {
          let k = K - (1 << a[n]);

          if (dp[K][0] > dp[k][0] + G[dp[k][1]][a[n]]) dp[K] = [dp[k][0] + G[dp[k][1]][a[n]], a[n]];
          if (i === B.length && dp[K][0] < result) result = dp[K][0];
        }
      }
    }

    function helper(A, C) {
      if (!A.length) return M[C.length] === undefined ? M[C.length] = [C] : M[C.length].push(C);
  
      helper(A.slice(1), C.concat([A[0]]));
      helper(A.slice(1), C);
    }
  }

  function buildG() {
    for (let i = 0; i < graph.length; i++) {
      let A = [...graph[i]];
      let N = [];
      let S = 1;
      let V = new Set([i]);

      while (A.length) {
        let a = A.pop();

        if (!V.has(a)) {
          V.add(a);
          G[i][a] = S;
          G[a][i] = S;
          N = N.concat(graph[a]);
        }

        if (!A.length) {
          A = N;
          N = [];
          S++;
        }
      }
    }
  }
};