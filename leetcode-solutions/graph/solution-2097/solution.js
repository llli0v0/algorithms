/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
  let G = {};
  let deg = {};
  for (let i = 0; i < pairs.length; i++) {
    let [a, b] = pairs[i];
    if (G[a] === undefined) G[a] = [];
    G[a].push(b);
    if (deg[a] === undefined) deg[a] = 0;
    if (deg[b] === undefined) deg[b] = 0;
    deg[a]--;
    deg[b]++;
  }
  let path = Hierholzer().reverse();
  let res = [];
  for (let i = 1; i < path.length; i++) {
    res.push([path[i - 1], path[i]]);
  }
  return res;

  function Hierholzer() {
    let stack = [];
    let start;
    for (let k in deg) {
      if (deg[k] === -1) start = parseInt(k);
    }
    if (start === undefined) start = pairs[0][0]
    function dfs(node) {
      let arr = G[node];
      while (arr && arr.length) {
        dfs(arr.pop());
      }
      stack.push(node);
    }
    dfs(start);
    return stack;
  }
};
