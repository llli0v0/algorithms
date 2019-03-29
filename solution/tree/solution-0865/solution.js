/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  if (!root || !root.left && !root.right) return root;
  let nodes = [root];
  let next = [];
  while (true) {
    let node = nodes.pop();
    if (node.left) {
      node.left.parent = node;
      next.push(node.left);
    }
    if (node.right) {
      node.right.parent = node;
      next.push(node.right);
    }
    if (!nodes.length) {
      if (next.every(i => !i.left && !i.right)) break;
      nodes = [...next];
      next = [];
    }
  }
  while (next.length > 1) {
    node = next.shift();
    if (next[next.length - 1] !== node.parent) {
      next.push(node.parent);
    }
  }
  return next[0];
};