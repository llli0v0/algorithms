/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null;
  let index;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === preorder[0]) {
      index = i;
      break;
    }
  }
  let node = new TreeNode(preorder[0]);
  node.left = buildTree(preorder.slice(1), inorder.slice(0, index));
  node.right = buildTree(preorder.slice(1 + index), inorder.slice(1 + index));
  return node;
};