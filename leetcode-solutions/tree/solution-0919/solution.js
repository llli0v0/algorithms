/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class CBTInserter {
  constructor(root) {
    this.root = root;
    this.insertTarget = [];
    this.fillTarget();
  }

  insert(v) {
    if (!this.insertTarget[0].left) {
      this.insertTarget[0].left = new TreeNode(v);
      this.insertTarget.push(this.insertTarget[0].left);
      return this.insertTarget[0].val;
    } else {
      let node = this.insertTarget.shift();
      node.right = new TreeNode(v);
      this.insertTarget.push(node.right);
      return node.val;
    }
  }

  get_root() {
    return this.root;
  }

  fillTarget() {
    let nodes = [this.root];
    let nxnodes = [];
    while (true) {
      let node = nodes.shift();
      node.left && nxnodes.push(node.left);
      node.right && nxnodes.push(node.right);
      if (!node.left || !node.right) {
        nodes.unshift(node);
        this.insertTarget = nodes.concat(nxnodes);
        break;
      }
      if (!nodes.length) {
        nodes = [...nxnodes];
        nxnodes = []
      }
    }
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new TreeNode(1);

let c = new CBTInserter(tree);
c.insert(2);
c.insert(3);
c.insert(4);
c.get_root();

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = Object.create(CBTInserter).createNew(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */