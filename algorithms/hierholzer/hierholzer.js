function findEulerPath(pairs) {
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
  return Hierholzer().reverse();

  function Hierholzer() {
    let stack = [];
    let start;
    for (let k in deg) {
      if (deg[k] === -1) start = parseInt(k);
    }
    // 如果没有 度 === -1 的点，说明存在环，任取一点即可
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

console.log(findEulerPath([[5,1],[4,5],[11,9],[9,4]]));
