/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  let a = [];
  let b = [];

  helper(root1, a);
  helper(root2, b);

  let result = [];

  while (a.length && b.length) {
    if (a[0] <= b[0]) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }

  result = result.concat(a.length ? a : b);

  return result;

  function helper(node, A) {
    if (node === null) return;

    helper(node.left, A);
    A.push(node.val);
    helper(node.right, A);
  }
};