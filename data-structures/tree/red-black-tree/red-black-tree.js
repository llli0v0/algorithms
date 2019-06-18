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
      this.root.color = 'B';
      return;
    }
    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
        root.left.color = 'R';
        root.left.parent = root;
        this.balance(root.left);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
        root.right.color = 'R';
        root.right.parent = root;
        this.balance(root.right);
      } else {
        this.insert(val, root.right);
      }
    }
  }
  balance(node) {
    if (node === this.root) {
      node.color = 'B';
      return;
    }
    if (node.parent.color === 'B') return;
    let uncle = this.getUncle(node);
    if (uncle && uncle.color === 'R') {
      uncle.color = 'B';
      node.parent.color = 'B';
      node.parent.parent.color = 'R';
      this.balance(node.parent.parent);
    } else {
      let side = this.isSameSide(node);
      if (side) {
        if (side === 'right') {
          /**
            *             4b                6b
            *           /  \               /  \
            *         2b    6r    --->   4r    7r
            *                \          /
            *                 7r       2b
            */
          this.rotateRight(node.parent);
          node.parent.color = 'B';
          node.parent.left.color = 'R';
          node.parent.right.color = 'R';
        } else {
          /**
            *             4b              2b
            *           /  \            /   \
            *         2r    6b  --->  1r     4r
            *        /                        \
            *      1r                          6b
            */
          this.rotateLeft(node.parent);
          node.parent.color = 'B';
          node.parent.left.color = 'R';
          node.parent.right.color = 'R';
        }
      } else {
        if (node.parent.left === node) {
          /**
            *             4b              4b               5b
            *           /  \            /  \              /  \
            *         2b    6r --->   2b    5r   --->   4r   6r
            *              /                 \         /
            *             5r                  6r     2b
            */
          this.rotateLeft(node);
          this.rotateRight(node);
          node.color = 'B';
          node.left.color = 'R';
          node.right.color = 'R';
        } else {
           /**
            *             5b              5b             3b
            *           /  \            /   \           /  \
            *         2r    6b --->   3r     6b --->  2r    5r
            *          \             /                       \
            *           3r         2r                         6r
            */
          this.rotateRight(node);
          this.rotateLeft(node);
          node.color = 'B';
          node.left.color = 'R';
          node.right.color = 'R';
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
      if (grandParent.left === parent) {
        grandParent.left = node;
      } else {
        grandParent.right = node;
      }
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
      if (grandParent.left === parent) {
        grandParent.left = node;
      } else {
        grandParent.right = node;
      }
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
  isSameSide(node) {
    // if no same side return false, else return side
    let nodeSide = node.parent.left === node ? 'left' : 'right';
    let parentSide = node.parent.parent.left === node.parent ? 'left' : 'right';
    return nodeSide === parentSide ? nodeSide : false;
  }
}