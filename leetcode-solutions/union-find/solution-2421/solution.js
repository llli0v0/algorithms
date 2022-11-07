/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
  let map = new Map();
  let vs = new Set();
  for (let i = 0; i < vals.length; i++) {
    let n = vals[i];
    if (!map.has(n)) map.set(n, []);
    map.get(n).push(i);
    vs.add(n);
  }
  let edgeMap = new Map();
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    if (vals[a] > vals[b]) {
      if (!edgeMap.has(a)) edgeMap.set(a, []);
      edgeMap.get(a).push(b);
    } else {
      if (!edgeMap.has(b)) edgeMap.set(b, []);
      edgeMap.get(b).push(a);
    }
  }
  let unionFind = new Map();
  vs = [...vs].sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < vs.length; i++) {
    let val = vs[i];
    let keys = map.get(val);
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      if (!unionFind.has(key)) unionFind.set(key, new Node(key, val));
      let curNode = unionFind.get(key);
      let rt = curNode.getRoot();
      if (!edgeMap.has(key)) continue;
      let ps = edgeMap.get(key);
      for (let n = 0; n < ps.length; n++) {
        let p = ps[n];
        if (!unionFind.has(p)) unionFind.set(p, new Node(p, vals[p]));
        let node = unionFind.get(p);
        let r1 = node.getRoot();
        if (rt !== r1) rt.parent = r1;
        rt = r1;
      }
    }
    let counter = new Map();
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];
      let rootKey = unionFind.get(key).getRoot().key;
      counter.set(rootKey, (counter.get(rootKey) ?? 0) + 1);
    }
    for (let v of counter.values()) {
      res += (1 + v) * v / 2;
    }
  }
  return res;
};

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.parent = null;
  }

  getRoot() {
    if (this.parent === null) return this;
    return this.parent.getRoot();
  }
}
