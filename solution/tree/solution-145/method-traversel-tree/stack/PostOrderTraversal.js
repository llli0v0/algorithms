/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function PostOrderTraversal(root) {
  if (root === null) return [];
  let stack = [root];
  let result = [];
  while (stack.length) {
    let topNode = stack.pop();
    if (topNode.left) stack.push(topNode.left);
    if (topNode.right) stack.push(topNode.right);
    result.unshift(topNode.val);
  }
  return result;
}

module.exports = PostOrderTraversal;