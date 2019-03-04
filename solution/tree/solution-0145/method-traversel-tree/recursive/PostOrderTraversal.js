/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function PostOrderTraversal(root) {
  if (root === null) return [];
  let result = [];
  function traversal(root) {
    if (root === null) return;
    traversal(root.left);
    traversal(root.right);
    result.push(root.val);
  }
  traversal(root);
  return result;
}

module.exports = PostOrderTraversal;