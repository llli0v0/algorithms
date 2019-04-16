/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head1 = l1, head2 = l2;
  let list = new ListNode(0);
  let cur = list;
  while (head1 && head2) {
    if (head1.val < head2.val) {
      cur.next = head1;
      cur = cur.next;
      head1 = head1.next;
    } else {
      cur.next = head2;
      cur = cur.next;
      head2 = head2.next;
    }
  }
  cur.next = head1 || head2;
  return list.next;
};