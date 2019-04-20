/**
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;
  let nodes = [root];
  let next = [];
  while (nodes.length) {
    let n = nodes.shift();
    if (nodes.length) {
      n.next = nodes[0];
    }
    if (n.left) next.push(n.left);
    if (n.right) next.push(n.right);
    if (!nodes.length) {
      nodes = next;
      next = [];
    }
  }
  return root;
};