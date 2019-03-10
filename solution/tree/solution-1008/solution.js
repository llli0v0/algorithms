/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  let tree = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    let current = tree;
    while (true) {
      if (current.val < preorder[i]) {
        if (current.right === null) {
          current.right = new TreeNode(preorder[i]);
          break;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = new TreeNode(preorder[i]);
          break;
        }
        current = current.left;
      }
    }
  }
  return tree;
};