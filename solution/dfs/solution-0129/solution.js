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
var sumNumbers = function(root) {
  if (!root) return 0;
  let result = 0;
  traverse(root, root.val + '');
  return result;
  function traverse(node, val) {
    if (!node) return;
    if (!node.left && !node.right) {
      result += parseInt(val);
      return;
    }
    traverse(node.left, val + String(node.left ? node.left.val : ''));
    traverse(node.right, val + String(node.right ? node.right.val : ''));
  }
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let tree = new TreeNode(1);
tree.left = new TreeNode(0);

sumNumbers(tree);