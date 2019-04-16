/**
 * @param {TreeNode} root 
 * @return {TreeNode[]}
 */
function InOrderTraversal(root) {
  let current = root;
  let result = [];
  while (current) {
    if (current.left === null) {
      result.push(current.val);
      current = current.right;
    } else {
      let pre = current.left;
      while (pre.right && pre.right !== current) {
        pre = pre.right;
      }
      if (pre.right === current) {
        pre.right = null;
        result.push(current.val);
        current = current.right;
      } else {
        pre.right = current;
        current = current.left;
      }
    }
  }
  return result;
}

module.exports = InOrderTraversal;