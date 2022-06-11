/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  let map = {};
  let set = new Set();
  for (let i = 0; i < descriptions.length; i++) {
    let [p, c, is] = descriptions[i];
    if (map[p] === undefined) map[p] = new Node(p);
    if (map[c] === undefined) map[c] = new Node(c);
    if (is) map[p].left = map[c];
    else map[p].right = map[c];
    set.add(c);
  }
  let root;
  for (let key in map) {
    if (!set.has(parseInt(key))) {
      root = key;
      break;
    }
  }
  return map[root];
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
