function maximumPoints(edges: number[][], coins: number[], k: number): number {
  let n = Math.ceil(Math.log2(10000));
  let eg = new Map<number, number[]>();
  for (let edge of edges) {
    let [a, b] = edge;
    if (!eg.has(a)) eg.set(a, []);
    if (!eg.has(b)) eg.set(b, []);
    eg.get(a)!.push(b);
    eg.get(b)!.push(a);
  }
  let dp: number[][] = new Array(coins.length).fill(null).map(() => new Array(n).fill(-Infinity));
  return solve(0, 0, -1);

  function solve(node: number, n1: number, fa: number): number {
    if (n1 >= n) return 0;
    if (isFinite(dp[node][n1])) return dp[node][n1];
    let val = Math.floor(coins[node] / (1 << n1));
    let rs1 = val - k;
    let rs2 = Math.floor(val / 2);
    for (let ch of eg.get(node) ?? []) {
      if (ch === fa) continue;
      rs1 += solve(ch, n1, node);
      rs2 += solve(ch, n1 + 1, node);
    }
    return dp[node][n1] = Math.max(rs1, rs2);
  }
};
