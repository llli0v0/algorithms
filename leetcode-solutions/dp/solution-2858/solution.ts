function minEdgeReversals(n: number, edges: number[][]): number[] {
  let tree = new Map<number, number[][]>();
  for (let edge of edges) {
    let [a, b] = edge;
    tree.set(a, (tree.get(a) ?? []).concat([[b, 0]]));
    tree.set(b, (tree.get(b) ?? []).concat([[a, 1]]));
  }
  let res = new Array(n).fill(0);
  let dp = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    let chs = tree.get(i)!;
    for (let ch of chs) {
      let [v, cost] = ch;
      res[i] += cost + helper(v, i);
    }
  }
  return res;

  function helper(v: number, fr: number): number {
    let key = `${v} ${fr}`;
    if (dp.has(key)) return dp.get(key)!;
    let chs = tree.get(v)!;
    let res = 0;
    for (let ch of chs) {
      let [v1, cost] = ch;
      if (v1 !== fr) {
        res += cost + helper(v1, v);
      }
    }
    dp.set(key, res);
    return res;
  }
};
