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
    if (uncle.color === 'RED') {
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
          node.parent.right.color = 'RED';
        } else {
          this.rotateLeft(node.parent);
          node.parent.color = 'BLACK';
          node.parent.left.color = 'RED';
        }
      } else {
        if (node.parent.left === node) {
          this.rotateRight(node);
          this.rotateLeft(node);
          node.left.color = 'RED';
        } else {
          this.rotateLeft(node);
          this.rotateRight(node);
          node.right.color = 'RED';
        }
      }
    }
  }
  rotateLeft(node) {
    let grandParent = node.parent.parent;
    let parent = node.parent;
    let nodeLeft = node.left;
    node.parent = grandParent;
    grandParent.left = node;
    parent.parent = node;
    node.left = parent;
    nodeLeft.parent = parent;
    parent.right = nodeLeft;
  }
  rotateRight(node) {
    let grandParent = node.parent.parent;
    let parent = node.parent;
    let nodeRight = node.right;
    node.parent = grandParent;
    grandParent.right = node;
    parent.parent = node;
    node.right = parent;
    nodeRight.parent = parent;
    parent.left = nodeRight;
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
    let parentSide = node.parent.parent.left === node.parent ? 'left' : right;
    return nodeSide === parentSide ? nodeSide : false;
  }
}

let tree = new RedBlackTree();
tree.insert(5);
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(25);
tree.insert(30);
console.log(tree);