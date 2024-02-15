function numberOfSets(n: number, maxDistance: number, roads: number[][]): number {
  let res = 0;
  for (let i = 0, t = 1 << n; i < t; i++) {
    let ps: number[] = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) ps.push(j);
    }
    res += floyd(Array.from(ps)) ? 1 : 0;
  }
  return res;

  function floyd(ps: number[]): boolean {
    let dp: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(Infinity));
    for (let a of ps) dp[a][a] = 0;
    for (let item of roads) {
      let [a, b, l] = item;
      if (ps.includes(a) && ps.includes(b)) {
        dp[a][b] = Math.min(dp[a][b], l);
        dp[b][a] = Math.min(dp[b][a], l);
      }
    }
    for (let k of ps) {
      for (let a of ps) {
        for (let b of ps) {
          dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
          dp[b][a] = Math.min(dp[b][a], dp[b][k] + dp[k][a]);
        }
      }
    }
    for (let a of ps) {
      for (let b of ps) {
        if (dp[a][b] > maxDistance) return false;
      }
    }
    return true;
  }
};
