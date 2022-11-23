/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    graph[a] = graph[a] ?? [];
    graph[a].push(b);
  }
  let res = new Array(n).fill(null).map(() => []);
  for (let i = 0; i < n; i++) {
    let cur = [...(graph[i] ?? [])];
    let visited = new Set([i]);
    while (cur.length) {
      let a = cur.pop();
      if (visited.has(a)) continue;
      visited.add(a);
      res[a].push(i);
      cur = [...cur, ...(graph[a] ?? [])];
    }
  }
  return res;
};
