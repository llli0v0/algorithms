/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
  if (N === 1) return [0];
  let P = {}, ans = new Array(N), cilCount = {}, visited = {};
  build();
  ans[0] = 0;
  dfs(0, 1);
  bfs();
  return ans;
  function build() {
    let nodes = {};
    for (let i = 0; i < edges.length; i++) {
      nodes[edges[i][0]] = true;
      nodes[edges[i][1]] = true;
      if (P[edges[i][0]] === undefined) P[edges[i][0]] = {};
      if (P[edges[i][1]] === undefined) P[edges[i][1]] = {};
      P[edges[i][0]][edges[i][1]] = edges[i][1];
      P[edges[i][1]][edges[i][0]] = edges[i][0];
    }
  }
  function bfs() {
    let M = Object.keys(P[0]).map(i => [i, 0]), X = [], checked = { 0: true };
    while (M.length) {
      let current = M.pop();
      checked[current[0]] = true;
      ans[current[0]] = ans[current[1]] + (N - 1 - cilCount[current[0]]) - (cilCount[current[0]] + 1);
      if (P[current[0]]) {
        let arr = Object.keys(P[current[0]]);
        for (let i = 0; i < arr.length; i++) {
          if (!checked[arr[i]]) X.push([arr[i], current[0]]);
        }
      }
      if (!M.length) {
        M = [...X];
        X = [];
      }
    }
  }
  function dfs(node, h) {
    if (!P[node]) {
      cilCount[node] = 0;
      return 0;
    }
    visited[node] = true;
    let cil = Object.keys(P[node]), count = 0, L = cil.length;
    for (let i = 0; i < cil.length; i++) {
      if (visited[cil[i]]) {
        L--;
        continue;
      }
      count += dfs(cil[i], h + 1);
    }
    cilCount[node] = L + count;
    ans[0] += L * h;
    return cilCount[node];
  }
};

console.log(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]));