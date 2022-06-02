/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function(nums1, nums2) {
  let segmentTree = new SegmentTree(nums1);
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = i;
  }
  let result = 0;
  for (let i = 0; i < nums2.length; i++) {
    let idx = map[nums2[i]];
    let count = segmentTree.insert(idx);
    result += segmentTree.insertCount(idx, count);
  }
  return result;
};

class SegmentTree{
  constructor(arr) {
    this.root = this.build(0, arr.length - 1);
  }

  build(l, r) {
    let m = Math.floor((l + r) / 2);
    let node = new Node(m);
    if (l === r) {
      node.isLeaf = true;
      return node;
    }
    node.left = this.build(l, m);
    node.right = this.build(m + 1, r);
    return node;
  }

  insert(i, node = this.root) {
    if (node.isLeaf) return 0;
    if (i > node.boundary) {
      node.rightCount++;
      return node.leftCount + this.insert(i, node.right);
    }
    node.leftCount++;
    return this.insert(i, node.left);
  }

  insertCount(i, count, node = this.root) {
    if (node.isLeaf) return 0;
    if (i > node.boundary) {
      node.rightCountSum += count;
      return node.leftCountSum + this.insertCount(i, count, node.right);
    }
    node.leftCountSum += count;
    return this.insertCount(i, count, node.left);
  }
}

class Node{
  constructor(boundary) {
    this.boundary = boundary;
    this.isLeaf = false;
    this.left = null;
    this.right = null;
    this.leftCount = 0;
    this.rightCount = 0;
    this.leftCountSum = 0;
    this.rightCountSum = 0;
  }
}
