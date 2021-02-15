/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTrioDegree = function(n, edges) {
  let edgesMap = {};
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    if (edgesMap[edge[0]] === undefined) edgesMap[edge[0]] = { count: 0 };
    if (edgesMap[edge[1]] === undefined) edgesMap[edge[1]] = { count: 0 };
    edgesMap[edge[0]][edge[1]] = edge[1];
    edgesMap[edge[1]][edge[0]] = edge[0];
    edgesMap[edge[0]].count++;
    edgesMap[edge[1]].count++;
  }
  let result = Infinity;
  for (let i = 1; i <= n; i++) {
    if (edgesMap[i] !== undefined) {
      let a = edgesMap[i];
      let counta = a.count;
      for (let key in a) {
        let b = edgesMap[key];
        if (b !== undefined) {
          let countab = counta + b.count;
          for (let k in b) {
            let c = edgesMap[k];
            if (c !== undefined) {
              let countabc = countab + c.count;
              if (a[k] !== undefined) {
                result = Math.min(result, countabc - 6);
              }
            }
          }
        }
      }
    }
  }
  return result > 160000 ? -1 : result;
};