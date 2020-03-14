/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
  let tree = {};

  for (let i = 0; i < edges.length; i++) {
    if (tree[edges[i][0]] === undefined) tree[edges[i][0]] = [];
    if (tree[edges[i][1]] === undefined) tree[edges[i][1]] = [];
    tree[edges[i][0]].push(edges[i][1]);
    tree[edges[i][1]].push(edges[i][0]);
  }

  if (target === 1 && tree[target] === undefined) return 1;

  let queue = [[1, 1]];
  let visit = new Set([1]);

  while (t) {
    let next = [];

    while (queue.length) {
      let a = queue.shift();

      if (tree[a[0]] === undefined) continue;

      let b = tree[a[0]].filter(item => !visit.has(item));

      for (let i = 0; i < b.length; i++) {
        let c = a[1] * (1 / b.length);

        next.push([b[i], c]);

        visit.add(b[i]);
        
        if (b[i] === target && (t - 1 === 0 || tree[target].every(item => visit.has(item)))) return c;
      }
    }

    t--;
    queue = next;
  }

  return 0;
};