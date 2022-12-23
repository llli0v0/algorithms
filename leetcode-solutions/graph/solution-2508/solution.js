/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function(n, edges) {
  let map = {};
  let edgeMap = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    map[a] = map[a] ?? 0;
    map[b] = map[b] ?? 0;
    map[a]++;
    map[b]++;
    edgeMap[a] = edgeMap[a] ?? new Set();
    edgeMap[b] = edgeMap[b] ?? new Set();
    edgeMap[a].add(b);
    edgeMap[b].add(a);
  }
  let odd = [];
  for (let k in map) {
    if (map[k] % 2) {
      odd.push(parseInt(k));
    }
  }
  if (!odd.length) {
    return true;
  } else if (odd.length === 2) {
    let [a, b] = odd;
    if (!edgeMap[a].has(b)) return true;
    for (let i = 1; i <= n; i++) {
      if (i !== a && i !== b) {
        if (!edgeMap[i]) return true;
        else if (!edgeMap[i].has(a) && !edgeMap[i].has(b)) return true;
      }
    }
  } else if (odd.length === 4) {
    let [a, b, c, d] = odd;
    if (
      (!edgeMap[a] || !edgeMap[a].has(b)) && (!edgeMap[c] || !edgeMap[c].has(d)) ||
      (!edgeMap[a] || !edgeMap[a].has(c)) && (!edgeMap[b] || !edgeMap[b].has(d)) ||
      (!edgeMap[a] || !edgeMap[a].has(d)) && (!edgeMap[b] || !edgeMap[b].has(c))
    ) return true;
  }
  return false;
};
