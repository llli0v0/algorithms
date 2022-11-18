/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i] = [obstacles[i], i];
  }
  obstacles.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let tree = new SagementTree(obstacles.length);
  let { root } = tree;
  let res = new Array(obstacles.length);
  for (let i = 0; i < obstacles.length; i++) {
    let index = obstacles[i][1];
    let val;
    if (index === 0) {
      tree.update(index, 1);
      val = 1;
    } else {
      val = root.getMax(0, index - 1) + 1;
      tree.update(index, val);
    }
    res[index] = val;
  }
  return res;
};

class SagementTree {
  constructor(len) {
    this.list = new Array(len);
    this.root = this.build(0, len - 1);
  }

  build(l, r) {
    let node = new Node(l, r);
    if (l === r) {
      this.list[l] = node;
      return node;
    }
    let m = Math.floor((l + r) / 2);
    let left = this.build(l, m);
    let right = this.build(m + 1, r);
    left.parent = node;
    right.parent = node;
    node.left = left;
    node.right = right;
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
    if (this.l === l && this.r === r) {
      return this.max;
    }
    if (r <= this.left.r) {
      return this.left.getMax(l, r);
    } else if (l >= this.right.l) {
      return this.right.getMax(l, r);
    } else {
      return Math.max(this.left.getMax(l, this.left.r), this.right.getMax(this.right.l, r));
    }
  }
}
