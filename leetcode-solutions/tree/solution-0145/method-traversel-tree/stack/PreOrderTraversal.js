/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function PreOrderTraversal(root) {
  if (root === null) return [];
  let stack = [];
  let result = [];
  let current = root;
  while (current) {
    result.push(current.val);
    stack.push(current);
    if (current.left) {
      current = current.left;
    } else {
      while (stack.length && stack[stack.length - 1].right === null) {
        stack.pop();
      }
      if (stack.length) {
        current = stack.pop().right;
      } else {
        return result;
      }
    }
  }
}

module.exports = PreOrderTraversal;