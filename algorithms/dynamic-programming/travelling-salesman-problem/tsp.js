function tsp(G) {
  let dp = {};

  for (let i = 1; i < G.length; i++) dp[(1 << i) + (1 << 0)] = [G[i][0], i];

  let M = {};

  let s = [];
  for (let i = 0; i < G.length; i++) {
    M[i + 1] = [];
    s.push(i);
  }
  
  combination(s.slice(1), [s[0]]);

  let result = Infinity;

  for (let i = 3; i <= G.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      let a = M[i][j];
      let k = 0;
      for (let m = 0; m < a.length; m++) k += 1 << a[m];
      
      dp[k] = [Infinity, 0];

      for (let n = 1; n < a.length; n++) {
        let v = dp[k - (1 << a[n])][0] + G[a[n]][dp[k - (1 << a[n])][1]];

        if (dp[k][0] > v) dp[k] = [v, a[n]];

        if (i === G.length) result = Math.min(result, v + G[a[n]][0]);
      }
    }
  }

  return result;


  function combination(s, a) {
    if (!s.length) return M[a.length].push(a);
      

    combination(s.slice(1), a.concat([s[0]]));
    combination(s.slice(1), a);
  }
}

console.log(tsp([
  [0, 1, 3, 3, 1, 4, 6, 3, 3, 9, 7, 5, 5, 5, 5],
  [1, 0, 2, 4, 1, 2, 4, 1, 8, 5, 7, 6, 6, 6, 6],
  [3, 2, 0, 7, 3, 4, 5, 4, 9, 4, 5, 7, 7, 7, 7],
  [3, 4, 7, 0, 5, 1, 2, 5, 4, 6, 8, 8, 8, 8, 8],
  [1, 1, 3, 5, 0, 3, 1, 8, 5, 7, 9, 9, 9, 9, 9],
  [4, 2, 4, 1, 3, 0, 3, 9, 6, 8, 7, 5, 5, 5, 5],
  [6, 4, 5, 2, 1, 3, 0, 1, 8, 5, 9, 6, 4, 4, 4],
  [3, 1, 4, 5, 8, 9, 1, 0, 7, 4, 6, 7, 1, 1, 1],
  [3, 8, 9, 4, 5, 6, 8, 7, 0, 6, 5, 8, 3, 3, 3],
  [9, 5, 4, 6, 7, 8, 5, 4, 6, 0, 4, 9, 5, 5, 5],
  [7, 7, 5, 8, 9, 7, 9, 6, 5, 4, 0, 5, 4, 4, 4],
  [5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 5, 0, 8, 8, 8],
  [5, 6, 7, 8, 9, 5, 4, 1, 3, 5, 4, 8, 0, 9, 9],
  [5, 6, 7, 8, 9, 5, 4, 1, 3, 5, 4, 8, 9, 0, 1],
  [5, 6, 7, 8, 9, 5, 4, 1, 3, 5, 4, 8, 9, 1, 0]
]));