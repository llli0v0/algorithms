function collectTheCoins(coins: number[], edges: number[][]): number {
  let weight = new Map<number, number>();
  let tree = new Map<number, Set<number>>();
  let one = new Set<number>();
  for (let edge of edges) {
    let [a, b] = edge;
    let w1 = weight.set(a, (weight.get(a) ?? 0) + 1).get(a)!;
    let w2 = weight.set(b, (weight.get(b) ?? 0) + 1).get(b)!;
    tree.set(a, (tree.get(a) ?? new Set()).add(b));
    tree.set(b, (tree.get(b) ?? new Set()).add(a));
    if (w1 > 1) one.delete(a);
    else one.add(a);
    if (w2 > 1) one.delete(b);
    else one.add(b);
  }
  coins = coins.map(item => item === 1 ? 2 : -1);
  let res = coins.length - 1;
  solve();
  return res * 2;

  function solve() {
    for (let o of one) {
      let neis: Set<number> = tree.get(o)!;
      if (!neis.size) return;
      let nei!: number;
      for (let ne of neis) nei = ne;
      if (coins[nei]) {
        if (coins[o] === 2) {
          coins[nei] = 1;
        } else if (coins[o] === 1) {
          coins[nei] = 0;
        }
      }
      let w = weight.set(nei, weight.get(nei)!- 1).get(nei);
      if (w === 1 && coins[nei]) one.add(nei);
      tree.delete(o);
      tree.get(nei)!.delete(o);
      one.delete(o);
      res--;
    }
    if (one.size) solve();
  }
};
