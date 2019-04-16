/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let result = true;
  let node1, node2;
  function DFS(root) {
    let stack = [];
    while (root) {
      stack.push(root);
      root = root.left;
    }
    while (stack.length) {
      let n = stack.pop();
      if (node1 === undefined || node2 === undefined) {
        if (node1 === undefined) {
          node1 = n.val;
        } else {
          node2 = n.val;
        }
        if (node2 !== undefined) {
          if (node1 >= node2) result = false;
        }
      } else {
        node1 = node2;
        node2 = n.val;
        if (node1 >= node2) result = false;
      }
      DFS(n.right);
    }
  }
  DFS(root);
  return result;
};