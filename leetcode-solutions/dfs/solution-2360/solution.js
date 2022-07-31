/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
  let visited = new Set();
  let res = -1;
  for (let i = 0; i < edges.length; i++) {
    if (visited.has(i)) continue;
    res = Math.max(res, dfs(edges[i], 1, { [i]: 0 }));
    visited.add(i);
  }
  return res;

  function dfs(cur, idx, map) {
    if (visited.has(cur)) return -1;
    if (map[cur] !== undefined) return idx - map[cur];
    else if (cur === -1) return -1;
    map[cur] = idx;
    let res = dfs(edges[cur], idx + 1, map);
    visited.add(cur);
    return res;
  }
};
