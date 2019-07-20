/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  let T = new Set();
  for (let i = 0; i < to_delete.length; i++) {
    T.add(to_delete[i]);
  }

  let result = [];
  
  helper(root);
  
  return result;

  function helper(node) {
    if (node === null) return;
    
    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;
    
    helper(node.left);
    helper(node.right);
    
    if (T.has(node.val)) {
      if (node.left) result.push(node.left);
      if (node.right) result.push(node.right);
      if (node.parent) node.parent.left === node ? node.parent.left = null : node.parent.right = null;
    }

    if (node === root && !T.has(node.val)) return result.push(node);
  }
};