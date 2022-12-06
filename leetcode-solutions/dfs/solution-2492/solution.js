/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
  let graph = {};
  let visited = new Set();
  for (let i = 0; i < roads.length; i++) {
    let [a, b, c] = roads[i];
    graph[a] = graph[a] ?? [];
    graph[b] = graph[b] ?? [];
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
  let res = Infinity;
  dfs(1);
  return res;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    let arr;
    if (arr = graph[node]) {
      for (let i = 0; i < arr.length; i++) {
        let [a, b] = arr[i];
        res = Math.min(res, b);
        dfs(a);
      }
    }
  }
};
