function maxOutput(n: number, edges: number[][], price: number[]): number {
  if (n === 1) return 0;
  else if (n === 2) return Math.max(...price);
  let tree = new Map<number, number[]>();
  for (let edge of edges) {
    let [a, b] = edge;
    if (!tree.has(a)) tree.set(a, []);
    if (!tree.has(b)) tree.set(b, []);
    tree.get(a)!.push(b);
    tree.get(b)!.push(a);
  }
  let leafs = new Set<number>();
  for (let [key, val] of tree) {
    if (val.length === 1) leafs.add(key);
  }
  let nedges: number[][] = [];
  let reflect = new Map<number, number>();
  for (let edge of edges) {
    let [a, b] = edge;
    if (!leafs.has(a) && !leafs.has(b)) {
      nedges.push(edge);
    } else if (leafs.has(a)) {
      reflect.set(a, b);
    } else {
      reflect.set(b, a);
    }
  }
  let ntree = new Map<number, number[]>();
  for (let edge of nedges) {
    let [a, b] = edge;
    if (!ntree.has(a)) ntree.set(a, []);
    if (!ntree.has(b)) ntree.set(b, []);
    ntree.get(a)!.push(b);
    ntree.get(b)!.push(a);
  }
  let res = 0;
  let dp = new Map<string, number>();
  for (let leaf of leafs) {
    res = Math.max(res, price[leaf] + solve(reflect.get(leaf)!, -1));
  }
  return res;

  function solve(node: number, fa: number): number {
    let key = `${node} ${fa}`;
    if (dp.has(key)) return dp.get(key)!;
    dp.set(key, price[node]);
    for (let ch of ntree.get(node) ?? []) {
      if (ch === fa) continue;
      dp.set(key, Math.max(dp.get(key)!, price[node] + solve(ch, node)));
    }
    return dp.get(key)!;
  }
};
