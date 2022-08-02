/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
  let visited = new Set();
  let visited2 = new Set();
  let node1map = { [node1]: 0 };
  let res;
  let min = Infinity;
  dfs(node1, 0);
  dfs2(node2, 0);
  return res === undefined ? -1 : res;

  function dfs2(node, len) {
    if (visited2.has(node)) return;
    visited2.add(node);
    if (visited.has(node)) {
      let a = Math.max(len, node1map[node]);
      if (a === min) {
        if (node < res) res = node;
      } else if (a < min) {
        min = a;
        res = node;
      }
    }
    dfs2(edges[node], len + 1);
  }

  function dfs(node, len) {
    if (visited.has(node)) return;
    visited.add(node);
    let next = edges[node];
    if (next !== -1) {
      if (node1map[next] === undefined) node1map[next] = len + 1;
      dfs(next, len + 1);
    }
  }
};
