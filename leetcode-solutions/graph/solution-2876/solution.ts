function countVisitedNodes(edges: number[]): number[] {
  let mp = new Map<number, number[]>();
  for (let i = 0; i < edges.length; i++) {
    let p = edges[i];
    mp.set(p, (mp.get(p) ?? []).concat([i]));
  }
  let res = new Array(edges.length).fill(-1);
  for (let i = 0, n = edges.length; i < n; i++) {
    if (res[i] > -1) continue;
    let loop = dfs(i);
    for (let v of loop) {
      res[v] = loop.size;
      let deep = 1;
      let chs = mp.get(v);
      let nt: number[] = [];
      while (chs?.length) {
        let ch = chs.shift()!;
        if (!loop.has(ch)) {
          res[ch] = deep + loop.size;
          nt = nt.concat(mp.get(ch) ?? []);
        }
        if (!chs.length) {
          chs = nt;
          nt = [];
          deep++;
        }
      }
    }
  }
  return res;

  function dfs(v: number): Set<number> {
    let st = [v];
    let vis = new Set<number>();
    let loop = new Set<number>();
    while (st.length) {
      let p = st.pop()!;
      if (vis.has(p)) {
        while (!loop.has(p)) {
          loop.add(p);
          p = edges[p];
        }
      } else {
        vis.add(p);
        st.push(edges[p]);
      }
    }
    return loop;
  }
};
