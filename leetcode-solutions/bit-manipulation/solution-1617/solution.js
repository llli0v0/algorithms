/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function(n, edges) {
  let cases = [];
  let result = new Array(n - 1).fill(0);
  getAllCase('');
  traverseAllCase();
  return result;

  function traverseAllCase() {
    for (let i = 0; i < cases.length; i++) {
      let points = new Set();
      for (let j = 0; j < n; j++) {
        if ((cases[i] & 2**j) === 2**j) points.add(j + 1);
      }
      let filEdges = edges.filter(item => points.has(item[0]) && points.has(item[1]));
      if (filEdges.length !== points.size - 1 || points.size < 2) continue;
      let tree = {};
      buildTree(filEdges, tree);
      let maxDeep = 0;
      for (let j of points) maxDeep = Math.max(maxDeep, getDeep(j, tree));
      result[maxDeep - 1]++;
    }
  }

  function getDeep(point, tree) {
    let visited = new Set([point]);
    let now = tree[point];
    let next = [];
    let deep = 0;
    while (now.length) {
      for (let i = 0; i < now.length; i++) {
        if (!visited.has(now[i])) {
          next = next.concat(tree[now[i]]);
          visited.add(now[i]);
        }
      }
      now = [];
      if (next.length) {
        deep++;
        now = next;
        next = [];
      }
    }
    return deep;
  }

  function buildTree(edges, tree) {
    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i];
      tree[edge[0]] === undefined && (tree[edge[0]] = []);
      tree[edge[1]] === undefined && (tree[edge[1]] = []);
      tree[edge[0]].push(edge[1]);
      tree[edge[1]].push(edge[0]);
    }
  }

  function getAllCase(s) {
    if (s.length === n) return cases.push(parseInt(s, 2));
    getAllCase(s + '1');
    getAllCase(s + '0');
  }
};