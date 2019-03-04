/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function PreOrderTraversal(root) {
  let current = root;
  let result = [];
  while (current) {
    result.push(current.val);
    if (current.left === null) {
      current = current.right;
    } else {
      let pre = current.left;
      while (pre.right && pre.right !== current) {
        pre = pre.right;
      }
      if (pre.right === current) {
        result.pop();
        pre.right = null;
        current = current.right;
      } else {
        pre.right = current;
        current = current.left;
      }
    }
  }
  return result;
}

module.exports = PreOrderTraversal;