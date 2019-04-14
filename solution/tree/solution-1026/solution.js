/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let result = -Infinity;
  postOrder(root);
  return result;
  function postOrder(node) {
    let arr = [0, 0];
    if (node && node.left) {
      res = postOrder(node.left);
      let l = node.val - node.left.val + res[0];
      let r = node.val - node.left.val + res[1];
      let child = node.val - node.left.val;
      result = Math.max(Math.abs(l), result);
      result = Math.max(Math.abs(r), result);
      result = Math.max(Math.abs(child), result);
      if (l < 0 && l < arr[0]) arr[0] = l;
      if (l > 0 && l > arr[1]) arr[1] = l;
      if (r < 0 && r < arr[0]) arr[0] = r;
      if (r > 0 && r > arr[1]) arr[1] = r;
      if (child < 0 && child < arr[0]) arr[0] = child;
      if (child > 0 && child > arr[1]) arr[1] = child;
    }
    if (node && node.right) {
      res = postOrder(node.right);
      let l = node.val - node.right.val + res[0];
      let r = node.val - node.right.val + res[1];
      let child = node.val - node.right.val;
      result = Math.max(Math.abs(l), result);
      result = Math.max(Math.abs(r), result);
      result = Math.max(Math.abs(child), result);
      if (l < 0 && l < arr[0]) arr[0] = l;
      if (l > 0 && l > arr[1]) arr[1] = l;
      if (r < 0 && r < arr[0]) arr[0] = r;
      if (r > 0 && r > arr[1]) arr[1] = r;
      if (child < 0 && child < arr[0]) arr[0] = child;
      if (child > 0 && child > arr[1]) arr[1] = child;
    }
    return arr;
  }
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new TreeNode(2);
tree.left = new TreeNode(5);
tree.right = new TreeNode(0);
tree.right.left = new TreeNode(4);
tree.right.left.right = new TreeNode(6);
tree.right.left.right.left = new TreeNode(1);
tree.right.left.right.left.left = new TreeNode(3);

maxAncestorDiff(tree);