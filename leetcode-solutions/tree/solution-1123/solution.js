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
var lcaDeepestLeaves = function(root) {
  let M = {};

  helper(root, 0);

  let k = Math.max(...Object.keys(M).map(i => parseInt(i)));

  let nodes = M[k];

  while (nodes.length > 1) {
    let p = nodes.shift().parent;
    let f = false;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].val === p.val) f = true;
    }
    if (!f) nodes.push(p);
  }

  return nodes[0];

  function helper(node, d) {
    if (node === null) return;
    
    if (node.left === null && node.right === null) M[d] === undefined ? M[d] = [node] : M[d].push(node);

    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;

    helper(node.left, d + 1);
    helper(node.right, d + 1);
  }
};