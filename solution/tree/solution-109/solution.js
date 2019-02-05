/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (head === null || head === undefined || head.val === undefined) return null;
  let list = [];
  let current = head;
  while (current) {
    list.push(current.val);
    current = current.next;
  }
  function build(root, list) {
    if (list.length === 0) return;
    let mid = Math.floor(list.length / 2);
    let left = list.slice(0, mid), right = list.slice(mid + 1);
    let leftMid = Math.floor(left.length / 2), rightMid = Math.floor(right.length / 2);
    if (left[leftMid] !== undefined) root.left = new TreeNode(left[leftMid]);
    if (right[rightMid] !== undefined) root.right = new TreeNode(right[rightMid]);
    build(root.left, left);
    build(root.right, right);
    return root;
  }
  let mid = Math.floor(list.length / 2);
  let root = new TreeNode(list[mid]);
  build(root, list);
  return root;
};