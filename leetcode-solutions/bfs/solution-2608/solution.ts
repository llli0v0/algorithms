function findShortestCycle(n: number, edges: number[][]): number {
  let graph = new Map<number, number[]>();
  for (let edge of edges) {
    let [a, b] = edge;
    graph.set(a, (graph.get(a) ?? []).concat([b]));
    graph.set(b, (graph.get(b) ?? []).concat([a]));
  }
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    let qs: number[] = [i];
    let ns = new Set<number>();
    let vis = new Set<number>();
    let dep = 0;
    while (qs.length) {
      for (let q of qs) {
        if (vis.has(q)) continue;
        let chs = graph.get(q);
        if (chs) {
          for (let ch of chs) {
            if (vis.has(ch)) continue;
            if (ns.has(ch)) {
              res = Math.min(res, dep * 2 + 2);
            }
            if (ns.has(q)) {
              res = Math.min(res, dep * 2 + 1);
            }
            ns.add(ch);
          }
        }
      }
      for (let q of qs) vis.add(q);
      dep++;
      qs = Array.from(ns);
      ns = new Set<number>();
    }
  }
  return isFinite(res) ? res : -1;
};
