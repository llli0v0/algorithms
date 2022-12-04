/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function(n, edges) {
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    graph[a] = graph[a] ?? [];
    graph[b] = graph[b] ?? [];
    graph[a].push(b);
    graph[b].push(a);
  }
  let resMap = {};
  for (let i = 1; i <= n; i++) {
    if (graph[i]) {
      let [key, res] = helper(i);
      resMap[key] = Math.max(resMap[key] ?? -1, res);
    }
  }
  let res = n - Object.keys(graph).length;
  for (let key in resMap) {
    if (resMap[key] === -1) return -1;
    else res += resMap[key];
  }
  return res;

  function helper(root) {
    let cur = [root];
    let next = [];
    let visited = new Set();
    let res = 0;
    let map = {};
    let min = 501;
    let f = false;
    while (cur.length) {
      res++;
      let curSet = new Set(cur);
      for (let i = 0; i < cur.length; i++) {
        let c = cur[i];
        min = Math.min(min, c);
        if (visited.has(c)) {
          if (res - map[c] > 2) f = true;
          continue;
        } else {
          visited.add(c);
          map[c] = res;
        }
        let ps = graph[c];
        if (!ps) continue;
        for (let j = 0; j < ps.length; j++) {
          let p = ps[j];
          if (!visited.has(p)) next.push(p);
          if (curSet.has(p)) f = true;
        }
      }
      cur = next;
      next = [];
    }
    return [min, f ? -1 : res];
  }
};
