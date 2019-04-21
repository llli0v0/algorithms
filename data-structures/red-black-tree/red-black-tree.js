class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.color = '';
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }
  remove() {
    // not implemented, Do a little later
  }
  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      this.root.color = 'BLACK';
      return;
    }
    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
        root.left.color = 'RED';
        root.left.parent = root;
        this.balance(root.left);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
        root.right.color = 'RED';
        root.right.parent = root;
        this.balance(root.right);
      } else {
        this.insert(val, root.right);
      }
    }
  }
  balance(node) {
    if (node === this.root) {
      node.color = 'BLACK';
      return;
    }
    if (node.parent.color === 'BLACK') return;
    let uncle = this.getUncle(node);
    if (uncle && uncle.color === 'RED') {
      uncle.color = 'BLACK';
      node.parent.color = 'BLACK';
      node.parent.parent.color = 'RED';
      this.balance(node.parent.parent);
    } else {
      let side = this.isSameSide(node);
      if (side) {
        if (side === 'right') {
          this.rotateRight(node.parent);
          node.parent.color = 'BLACK';
          node.parent.left.color = 'RED';
          node.parent.right.color = 'RED';
        } else {
          this.rotateLeft(node.parent);
          node.parent.color = 'BLACK';
          node.parent.left.color = 'RED';
          node.parent.right.color = 'RED';
        }
      } else {
        if (node.parent.left === node) {
          this.rotateRight(node);
          this.rotateLeft(node);
          node.color = 'BLACK';
          node.left.color = 'RED';
          node.right.color = 'RED';
        } else {
          this.rotateLeft(node);
          this.rotateRight(node);
          node.color = 'BLACK';
          node.left.color = 'RED';
          node.right.color = 'RED';
        }
      }
    }
  }
  rotateLeft(node) {
    let grandParent = node.parent.parent;
    let parent = node.parent;
    let nodeRight = node.right;
    if (grandParent) {
      node.parent = grandParent;
      grandParent.left = node;
      node.right = parent;
      node.right.parent = node;
      parent.left = nodeRight;
      if (nodeRight) nodeRight.parent = parent;
    } else {
      this.root = node;
      parent.parent = this.root;
      parent.left = nodeRight;
      node.right = parent;
      node.parent = null;
      if (nodeRight) nodeRight.parent = parent;
    }
  }
  rotateRight(node) {
    let grandParent = node.parent.parent;
    let parent = node.parent;
    let nodeLeft = node.left;
    if (grandParent) {
      node.parent = grandParent;
      grandParent.right = node;
      node.left = parent;
      node.left.parent = node;
      parent.right = nodeLeft;
      if (nodeLeft) nodeLeft.parent = parent;
    } else {
      this.root = node;
      parent.parent = this.root;
      parent.right = nodeLeft;
      node.left = parent;
      node.parent = null;
      if (nodeLeft) nodeLeft.parent = parent;
    }
  }
  getUncle(node) {
    let grandParent = node.parent.parent;
    if (!grandParent.left || !grandParent.right) return false;
    if (grandParent.left === node.parent) return grandParent.right;
    if (grandParent.right === node.parent) return grandParent.left;
  }
  /**
   * 
   * @param {TreeNode} node 
   * @returns if no same side return false, else return side
   */
  isSameSide(node) {
    let nodeSide = node.parent.left === node ? 'left' : 'right';
    let parentSide = node.parent.parent.left === node.parent ? 'left' : 'right';
    return nodeSide === parentSide ? nodeSide : false;
  }
}

let tree = new RedBlackTree();
tree.insert(10); // b
tree.insert(-10); // r
tree.insert(20); // b
tree.insert(-20); // b
tree.insert(6); // b
tree.insert(15); // r
tree.insert(25); // r
tree.insert(2); // r
tree.insert(8); // r
console.log(tree);