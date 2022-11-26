/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
  head = head.val ? head : head.next;
  let h = head;
  while (head) {
    while (head.next && head.next.val) {
      head.val += head.next.val;
      head.next = head.next.next;
    }
    if (head.next && !head.next.val && !head.next.next) {
      head.next = null;
      break;
    }
    head = head.next;
  }
  return h;
};
