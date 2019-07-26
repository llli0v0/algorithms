/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
  if (graph.every(i => i.length === graph.length - 1)) return graph.length - 1;

  let memo = new Set();

  let A = [];
  let N = [];
  let S = 0;

  for (let i = 0; i < graph.length; i++) {
    A.push([1 << i, i]);
  }

  let K = (1 << graph.length) - 1;

  while (true) {
    let a = A.shift();

    if (a[0] === K) return S;

    if (!memo.has(a.join('|'))) {
      memo.add(a.join('|'));

      for (let i = 0; i < graph[a[1]].length; i++) {
        let n = graph[a[1]][i];

        let c = 1 << n;

        let b = [a[0] | c, n];

        N.push(b);
      }
    }

    if (!A.length) {
      A = N;
      N = [];
      S++;
    }
  }
};