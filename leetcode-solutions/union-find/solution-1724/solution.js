class Node {
  constructor() {
    this.parent = null;
    this.parentWay = 0;
  }

  getRoot(limit = Infinity) {
    if (this.parent === null || this.parentWay >= limit) return this;
    return this.parent.getRoot(limit);
  }
}

/**
 * @param {number} n
 * @param {number[][]} edgeList
 */
var DistanceLimitedPathsExist = function(n, edgeList) {
  this.nodeMap = {};
  this.edgeList = edgeList.sort((a, b) => a[2] - b[2]);
};

/** 
 * @param {number} p 
 * @param {number} q 
 * @param {number} limit
 * @return {boolean}
 */
DistanceLimitedPathsExist.prototype.query = function(p, q, limit) {
  while (this.edgeList.length && this.edgeList[0][2] < limit) {
    let [a, b, l] = this.edgeList.shift();
    if (this.nodeMap[a] === undefined) this.nodeMap[a] = new Node();
    if (this.nodeMap[b] === undefined) this.nodeMap[b] = new Node();
    a = this.nodeMap[a];
    b = this.nodeMap[b];
    if (a.getRoot() !== b.getRoot()) {
      b.getRoot().parentWay = l;
      b.getRoot().parent = a.getRoot();
    }
  }
  if ((p = this.nodeMap[p]) && (q = this.nodeMap[q])) {
    if (p.getRoot(limit) === q.getRoot(limit)) return true;
  }
  return false;
};

/**
 * Your DistanceLimitedPathsExist object will be instantiated and called as such:
 * var obj = new DistanceLimitedPathsExist(n, edgeList)
 * var param_1 = obj.query(p,q,limit)
 */
