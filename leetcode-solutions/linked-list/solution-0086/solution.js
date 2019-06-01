/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return null;
  let l = [];
  let b = [];
  let current = head;
  while (current) {
    if (current.val < x) {
      l.push(current.val);
    } else {
      b.push(current.val);
    }
    current = current.next;
  }
  let r = l.concat(b);
  current = new ListNode(r[0]);
  head = current;
  for (let i = 1; i < r.length; i++) {
    current.next = new ListNode(r[i]);
    current = current.next;
  }
  return head;
};