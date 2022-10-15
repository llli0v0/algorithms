/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {boolean} result
 * @return {number}
 */
var minimumFlips = function(root, result) {
  return helper(root, result);

  function helper(node, result) {
    if (node[result] !== undefined) return node[result];
    if (node.val === 2) {
      if (result) {
        node[result] = Math.min(
          helper(node.left, true) + helper(node.right, true),
          helper(node.left, false) + helper(node.right, true),
          helper(node.left, true) + helper(node.right, false)
        );
      } else {
        node[result] = helper(node.left, false) + helper(node.right, false);
      }
    } else if (node.val === 3) {
      if (result) {
        node[result] = helper(node.left, true) + helper(node.right, true);
      } else {
        node[result] = Math.min(
          helper(node.left, false) + helper(node.right, true),
          helper(node.left, true) + helper(node.right, false),
          helper(node.left, false) + helper(node.right, false)
        );
      }
    } else if (node.val === 4) {
      if (result) {
        node[result] = Math.min(
          helper(node.left, false) + helper(node.right, true),
          helper(node.left, true) + helper(node.right, false)
        );
      } else {
        node[result] = Math.min(
          helper(node.left, true) + helper(node.right, true),
          helper(node.left, false) + helper(node.right, false)
        );
      }
    } else if (node.val === 5) {
      if (node.left) {
        if (result) node[result] = helper(node.left, false);
        else node[result] = helper(node.left, true);
      } else {
        if (result) node[result] = helper(node.right, false);
        else node[result] = helper(node.right, true);
      }
    } else if (node.val === 1) {
      if (result) return 0;
      return 1;
    } else if (node.val === 0) {
      if (result) return 1;
      return 0;
    }
    return node[result];
  }
};
