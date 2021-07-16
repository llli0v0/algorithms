/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return traverse(root);

  function traverse(node) {
    if (node) {
      if (helper(node, 0)) return true;
      return traverse(node.left) || traverse(node.right);
    }
    return false;
  }

  function helper(node, index) {
    if (index === arr.length) return true;
    if (!node || node.val !== arr[index]) return false;
    return helper(node.left, index + 1) || helper(node.right, index + 1);
  }
};
