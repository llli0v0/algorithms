/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
  let map = {};
  restricted = new Set(restricted);
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    if (map[a] === undefined) map[a] = [];
    if (map[b] === undefined) map[b] = [];
    map[a].push(b);
    map[b].push(a);
  }
  let visited = new Set();
  let res = new Set();
  helper(0);
  return res.size;
  
  function helper(node) {
    if (restricted.has(node) || visited.has(node)) return;
    res.add(node);
    visited.add(node);
    let nodes = map[node];
    for (let i = 0; i < nodes.length; i++) {
      helper(nodes[i]);
    }
  }
};
