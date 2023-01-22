/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  let [rootUF, used] = buildRootUF();
  let rootUF1 = buildRootUF()[0];
  let u = used;
  for (let i = 0; i < edges.length; i++) {
    let [t, a, b] = edges[i];
    if (t === 1) {
      let an = rootUF[a] = rootUF[a] ?? new Node(a);
      let bn = rootUF[b] = rootUF[b] ?? new Node(b);
      let ap = an.getRoot();
      let bp = bn.getRoot();
      if (ap !== bp) {
        ap.parent = bp;
        bp.count += ap.count;
        u++;
      }
    } else if (t === 2) {
      let an = rootUF1[a] = rootUF1[a] ?? new Node(a);
      let bn = rootUF1[b] = rootUF1[b] ?? new Node(b);
      let ap = an.getRoot();
      let bp = bn.getRoot();
      if (ap !== bp) {
        ap.parent = bp;
        bp.count += ap.count;
        u++;
      }
    }
  }
  if (rootUF[1]?.getRoot().count !== n || rootUF1[1]?.getRoot().count !== n) return -1;
  return edges.length - u;

  function buildRootUF() {
    let rootUF = {};
    let used = 0;
    for (let i = 0; i < edges.length; i++) {
      let [t, a, b] = edges[i];
      if (t === 3) {
        let an = rootUF[a] = rootUF[a] ?? new Node(a);
        let bn = rootUF[b] = rootUF[b] ?? new Node(b);
        let ap = an.getRoot();
        let bp = bn.getRoot();
        if (ap !== bp) {
          ap.parent = bp;
          bp.count += ap.count;
          used++;
        }
      }
    }
    return [rootUF, used];
  }
};

class Node {
  constructor(val) {
    this.parent = null;
    this.val = val;
    this.count = 1;
  }

  getRoot() {
    let cur = this;
    while (cur.parent) cur = cur.parent;
    return cur;
  }
}
