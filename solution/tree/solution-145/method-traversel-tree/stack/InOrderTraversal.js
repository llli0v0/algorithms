/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function InOrderTraversal(root) {
  let stack = [];
  let result = [];
  let current = root;
  while (current) {
    stack.push(current);
    if (current.left) {
      current = current.left;
    } else {
      while (stack.length && stack[stack.length - 1].right === null) {
        result.push(stack.pop().val);
      }
      if (stack.length) {
        let topNode = stack.pop();
        result.push(topNode.val);
        current = topNode.right;
      } else {
        return result;
      }
    }
  }
}

module.exports = InOrderTraversal;