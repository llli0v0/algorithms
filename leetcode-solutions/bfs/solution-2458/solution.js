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
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
  helper(root);
  let cur = [root];
  let next = [];
  let H = 0;
  let delMap = new Map();
  while (cur.length) {
    cur.sort((a, b) => b.h - a.h);
    for (let i = 0; i < cur.length; i++) {
      let { left, right, val } = cur[i];
      if (i === 0) {
        delMap.set(val, cur.length > 1 ? cur[1].h + H : H - 1);
      } else {
        delMap.set(val, cur[0].h + H);
      }
      left && (next.push(left));
      right && (next.push(right));
    }
    cur = next;
    next = [];
    H++;
  }
  let res = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    res[i] = delMap.get(queries[i]);
  }
  return res;

  function helper(node) {
    if (!node) return -1;
    node.h = 1 + Math.max(helper(node.left), helper(node.right));
    return node.h;
  }
};
