/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let current = head;
  let reverseNodes = [];
  let reverseHead = head;
  let len = n - m + 1;
  while (n > 0) {
    if (m <= 1) {
      reverseNodes.push(current.val);
    } else {
      reverseHead = current.next;
    }
    current = current.next;
    m -= 1;
    n -= 1;
  }
  reverseNodes.reverse();
  while (len && reverseHead) {
    reverseHead.val = reverseNodes[reverseNodes.length - len];
    reverseHead = reverseHead.next;
    len -= 1;
  }
  return head;
};