/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  let nodes = [root];
  let next = [];
  let result = [root.val];
  while (nodes.length) {
    let node = nodes.pop();
    node.left && next.push(node.left);
    node.right && next.push(node.right);
    if (!nodes.length && next.length) {
      let currentMax = next[0].val;
      for (let i = 0; i < next.length; i++) {
        if (next[i].val > currentMax) {
          currentMax = next[i].val;
        }
      }
      result.push(currentMax);
      nodes = [...next];
      next = [];
    }
  }
  return result;
};