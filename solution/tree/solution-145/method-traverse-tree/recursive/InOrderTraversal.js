/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function InOrderTraversal(root) {
  let result = [];
  function traversal(root) {
    if (root === null) return;
    traversal(root.left);
    result.push(root.val);
    traversal(root.right);
  }
  traversal(root);
  return result;
}

module.exports = InOrderTraversal;