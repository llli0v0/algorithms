function rootCount(edges: number[][], guesses: number[][], k: number): number {
  let tree = new Map<number, number[]>();
  for (let edge of edges) {
    let [a, b] = edge;
    if (!tree.has(a)) tree.set(a, []);
    if (!tree.has(b)) tree.set(b, []);
    tree.get(a)!.push(b);
    tree.get(b)!.push(a);
  }
  let gus = new Set<string>();
  for (let gu of guesses) {
    let [a, b] = gu;
    gus.add(`${a} ${b}`);
  }
  let dp = new Map<string, number>();
  let res = 0;
  for (let i = 0; i <= edges.length; i++) {
    if (solve(i, -1) >= k) res++;
  }
  return res;

  function solve(node: number, fa: number): number {
    let key = `${node} ${fa}`;
    if (dp.has(key)) return dp.get(key)!;
    let res = 0;
    for (let ch of tree.get(node) ?? []) {
      if (ch === fa) continue;
      if (gus.has(`${node} ${ch}`)) {
        res++;
      }
      res += solve(ch, node);
    }
    dp.set(key, res);
    return res;
  }
};
