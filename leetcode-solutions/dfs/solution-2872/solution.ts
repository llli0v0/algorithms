function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
  let eg = new Map<number, number[]>();
  for (let edge of edges) {
    let [a, b] = edge;
    if (!eg.has(a)) eg.set(a, []);
    if (!eg.has(b)) eg.set(b, []);
    eg.get(a)!.push(b);
    eg.get(b)!.push(a);
  }
  let res = 0;
  solve(0, -1);
  return res;

  function solve(node: number, fa: number): number {
    let val = values[node];
    for (let ch of eg.get(node) ?? []) {
      if (ch === fa) continue;
      val += solve(ch, node);
    }
    if (val % k === 0) {
      res++;
      return 0;
    }
    return val;
  }
};
