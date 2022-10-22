/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
  let segmentTree = new SegmentTree(s);
  let res = [];
  for (let i = 0; i < queryCharacters.length; i++) {
    res.push(segmentTree.update(queryIndices[i], queryCharacters[i]));
  }
  return res;
};

class SegmentTree {
  constructor(s) {
    this.s = s;
    this.leaf = new Map();
    this.root = this.build(0, s.length - 1, null);
  }

  build(l, r, parent) {
    let m = Math.floor((l + r) / 2);
    let node = new Node();
    node.parent = parent;
    if (l === r) {
      node.boundary.push([this.s[l], 1]);
      node.max = 1;
      this.leaf.set(l, node);
      return node;
    }
    let left = this.build(l, m, node);
    let right = this.build(m + 1, r, node);
    node.left = left;
    node.right = right;
    this.updateNodeBoundary(node);
    return node;
  }

  update(index, s) {
    let node = this.leaf.get(index);
    node.boundary = [[s, 1]];
    let max = 1;
    while (node.parent) {
      node = node.parent;
      node.boundary = [];
      this.updateNodeBoundary(node);
      max = Math.max(max, node.max);
    }
    return max;
  }

  updateNodeBoundary(node) {
    let { left, right } = node;
    let leftBound = left.boundary;
    let rightBound = right.boundary;
    if (leftBound.length === 1 && rightBound.length === 1) {
      let [a, b] = leftBound[0];
      let [c, d] = rightBound[0];
      if (a === c) {
        node.boundary.push([a, b + d]);
        node.max = Math.max(left.max, right.max, b + d);
      } else {
        node.boundary.push([a, b], [c, d]);
        node.max = Math.max(left.max, right.max);
      }
    } else if (leftBound.length === 2 && rightBound.length === 2) {
      let [a, b] = leftBound[1];
      let [c, d] = rightBound[0];
      node.boundary.push(leftBound[0], rightBound[1]);
      if (a === c) {
        node.max = Math.max(left.max, right.max, b + d);
      } else {
        node.max = Math.max(left.max, right.max);
      }
    } else if (leftBound.length === 1 && rightBound.length === 2) {
      let [a, b] = leftBound[0];
      let [c, d] = rightBound[0];
      if (a === c) {
        node.boundary.push([a, b + d], rightBound[1]);
        node.max = Math.max(left.max, right.max, b + d);
      } else {
        node.boundary.push(leftBound[0], rightBound[1]);
        node.max = Math.max(left.max, right.max);
      }
    } else if (leftBound.length === 2 && rightBound.length === 1) {
      let [a, b] = leftBound[1];
      let [c, d] = rightBound[0];
      if (a === c) {
        node.boundary.push(leftBound[0], [a, b + d]);
        node.max = Math.max(left.max, right.max, b + d);
      } else {
        node.boundary.push(leftBound[0], rightBound[0]);
        node.max = Math.max(left.max, right.max);
      }
    }
  }
}

class Node {
  constructor() {
    this.boundary = [];
    this.max = 0;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}
