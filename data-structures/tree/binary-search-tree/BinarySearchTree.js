const BinarySearchTreeNode = require('./BinarySearchTreeNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (this.root === null) {
      this.root = new BinarySearchTreeNode(val);
      return;
    }
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new BinarySearchTreeNode(val);
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new BinarySearchTreeNode(val);
          return;
        }
        current = current.right;
      }
    }
  }
}

module.exports = BinarySearchTree;