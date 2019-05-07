/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  postOrder(root);
  while (p) {
    p.pParent = true;
    p = p.parent;
  }
  while (q) {
    if (q.pParent) return q;
    q = q.parent;
  }
  function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    if (root.left) root.left.parent = root;
    if (root.right) root.right.parent = root;
  }
};