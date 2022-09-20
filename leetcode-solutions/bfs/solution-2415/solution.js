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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
  let cur = [root];
  let num = 0;
  while (cur.length) {
    let next = [];
    let vals = [];
    for (let i = 0; i < cur.length; i++) {
      let item = cur[i];
      if (item.left) {
        next.push(item.left);
        next.push(item.right);
      }
      vals.unshift(item.val);
    }
    if (num % 2) {
      for (let i = 0; i < vals.length; i++) {
        cur[i].val = vals[i];
      }
    }
    num++;
    cur = next;
    next = [];
  }
  return root;
};
