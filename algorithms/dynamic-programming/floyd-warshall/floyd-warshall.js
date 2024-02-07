function floyd(G, n) {
  let dp = new Array(n).fill(null).map(() => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (G[i] && G[i][j] !== undefined) {
        dp[i][j] = G[i][j];
      } else if (i === j) {
        dp[i][j] = 0;
      }
    }
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }
  return dp;
}

let G = {
  0: {
    2: 9,
    4: 10
  },
  1: {
    3: 5
  },
  2: {
    3: 7
  },
  3: {
    0: 10,
    1: 2,
    2: 1,
    4: 6
  },
  4: {
    1: 3,
    2: 4,
    3: 9
  }
};

console.log(floyd(G, 5));
