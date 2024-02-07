function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
  let V = {};
  let idx = 0;
  for (let i = 0; i < original.length; i++) {
    let v = original[i];
    if (V[v] === undefined) {
      V[v] = idx;
      idx++;
    }
  }
  for (let i = 0; i < changed.length; i++) {
    let v = changed[i];
    if (V[v] === undefined) {
      V[v] = idx;
      idx++;
    }
  }
  let G = {};
  for (let i = 0; i < original.length; i++) {
    let a = V[original[i]];
    let b = V[changed[i]];
    if (G[a] === undefined) {
      G[a] = {};
    }
    if (G[a][b] !== undefined) {
      G[a][b] = Math.min(G[a][b], cost[i]);
    } else {
      G[a][b] = cost[i];
    }
  }
  let dp = new Array(idx).fill(null).map(() => new Array(idx).fill(Infinity));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp.length; j++) {
      if (i === j) {
        dp[i][j] = 0;
      } else if (G[i] && G[i][j] !== undefined) {
        dp[i][j] = G[i][j];
      }
    }
  }
  for (let k = 0; k < idx; k++) {
    for (let i = 0; i < idx; i++) {
      for (let j = 0; j < idx; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }
  let originalMap = {};
  for (let i = 0; i < original.length; i++) {
    originalMap[original[i]] = 1;
  }
  let changedMap = {};
  for (let i = 0; i < changed.length; i++) {
    changedMap[changed[i]] = 1;
  }
  let dp2 = {[source.length]: 0};
  let lens = new Set(original.map(item => item.length));
  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i] === target[i]) dp2[i] = dp2[i + 1];
    else dp2[i] = Infinity;
    for (let l of lens) {
      if (i + l > source.length) continue;
      let a = source.substring(i, i + l);
      let b = target.substring(i, i + l);
      if (a in originalMap && b in changedMap) {
        let aa = V[a];
        let bb = V[b];
        dp2[i] = Math.min(dp2[i], dp[aa][bb] + dp2[i + l]);
      }
    }
  }
  return isFinite(dp2[0]) ? dp2[0] : -1;
};
