/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  let ed = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    if (ed[a] === undefined) ed[a] = [];
    if (ed[b] === undefined) ed[b] = [];
    ed[a].push(b);
    ed[b].push(a);
  }
  let set = new Set();
  let sum = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let count = dfs(i);
    res += sum * count;
    sum += count;
  }
  return res;

  function dfs(start) {
    if (set.has(start)) return 0;
    set.add(start);
    let edges = ed[start];
    let res = 1;
    if (edges) {
      for (let i = 0; i < edges.length; i++) {
        res += dfs(edges[i]);
      }
    }
    return res;
  }
};
