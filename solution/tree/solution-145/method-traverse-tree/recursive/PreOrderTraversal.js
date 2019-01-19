/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function PreOrderTraversal(root) {
  let result = [];
  function traversal(root) {
    if (root === null) return;
    result.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }
  traversal(root);
  return result;
}

module.exports = PreOrderTraversal;