/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null) return null;
  let h = head;
  let stack = [];
  let len = 0;
  while(h) {
    len++;
    stack.push(h);
    h = h.next;
  }
  k = k % len;
  while(k && stack.length > 1) {
    let newHead = stack.pop();
    stack[stack.length - 1].next = null;
    stack.unshift(newHead);
    stack[0].next = stack[1];
    k--;
  }
  return stack[0];
};