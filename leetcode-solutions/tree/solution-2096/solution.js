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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  let startNode;
  let destNode;
  find(root);
  let cur = startNode;
  let h = 0;
  while (cur) {
    if (cur === destNode) return new Array(h).fill('U').join('');
    cur.sign = true;
    cur.h = h;
    h++;
    cur = cur.parent;
  }
  cur = destNode;
  let res = '';
  while (true) {
    if (cur.parent.left === cur) res = 'L' + res;
    else res = 'R' + res;
    if (cur.parent.sign) {
      res = new Array(cur.parent.h).fill('U').join('') + res;
      break;
    }
    cur = cur.parent;
  }
  return res;

  function find(node) {
    if (!node) return;
    if (node.val === startValue) startNode = node;
    if (node.val === destValue) destNode = node;
    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;
    find(node.left);
    find(node.right);
  }
};
