function minimumTotalPrice(n: number, edges: number[][], price: number[], trips: number[][]): number {
  if (n === 1) return price[0] / 2;
  let tree = new Map();
  for (let edge of edges) {
    let [a, b] = edge;
    tree.set(a, (tree.get(a) ?? []).concat([b]));
    tree.set(b, (tree.get(b) ?? []).concat([a]));
  }
  let cost: number[] = new Array(n).fill(0);
  for (let trip of trips) {
    let [a, b] = trip;
    let path: number[] = dfs(a, new Set(), b)!;
    for (let node of path) {
      cost[node] += price[node];
    }
  }
  let dp = new Map<string, number>();
  return helper(0, true, null);

  function dfs(node: number, vis: Set<number>, target: number): number[] | null {
    if (node === target) return [node];
    vis.add(node);
    let chs = tree.get(node);
    for (let ch of chs) {
      if (vis.has(ch)) continue;
      let res = dfs(ch, vis, target);
      if (res) {
        return [node].concat(res);
      }
    }
    return null;
  }

  function helper(node: number, can: boolean, parent: number | null): number {
    let key = `${node} ${can}`;
    if (dp.has(key)) return dp.get(key)!;
    let chs = tree.get(node);
    let c1 = 0;
    let c2 = 0;
    for (let ch of chs) {
      if (ch === parent) continue;
      c1 += helper(ch, true, node);
      c2 += helper(ch, false, node);
    }
    if (can) {
      dp.set(key, Math.min(cost[node] + c1, cost[node] / 2 + c2));
    } else {
      dp.set(key, cost[node] + c1);
    }
    return dp.get(key)!;
  }
};
