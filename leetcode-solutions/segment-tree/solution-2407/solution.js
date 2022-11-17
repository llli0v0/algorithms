/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function(nums, k) {
  let tree = new SagementTree(nums);
  let { root } = tree
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let l = Math.max(0, n - k);
    let r = n - 1;
    let node = tree.list[n];
    let len = 1 + root.getMax(l, r);
    if (len > node.max) {
      tree.update(n, len);
    }
    res = Math.max(res, len);
  }
  return res;
};

class SagementTree {
  constructor(nums) {
    this.list = new Array(Math.max(...nums) + 1);
    this.root = this.build(0, this.list.length - 1);
  }

  build(l, r) {
    if (l === r) {
      this.list[l] = new Node(l, l);
      return this.list[l];
    }
    let m = Math.floor((l + r) / 2);
    let node = new Node(l, r);
    node.left = this.build(l, m);
    node.right = this.build(m + 1, r);
    node.left.parent = node.right.parent = node;
    node.max = Math.max(node.left.max, node.right.max);
    return node;
  }

  update(index, val) {
    let node = this.list[index];
    while (node) {
      node.max = Math.max(node.max, val);
      node = node.parent;
    }
  }
}

class Node {
  constructor(l, r) {
    this.max = 0;
    this.l = l;
    this.r = r;
    this.left = this.right = null;
    this.parent = null;
  }

  getMax(l, r) {
    if (l === this.l && r === this.r) return this.max;
    let { left, right } = this;
    if (r <= left.r) return left.getMax(l, r);
    else if (l >= right.l) return right.getMax(l, r);
    else {
      return Math.max(left.getMax(l, left.r), right.getMax(right.l, r));
    }
  }
}
