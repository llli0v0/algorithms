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
var removeNodes = function(head) {
  let newHead = head;
  let tail = head;
  head = head.next;
  while (head) {
    while (tail && tail.val < head.val) {
      if (!tail.pre) {
        tail = null;
      } else {
        let newTail = tail.pre;
        newTail.next = null;
        tail.pre = null;
        tail = newTail;
      }
    }
    if (tail) {
      tail.next = head;
      head.pre = tail;
    } else {
      newHead = head;
    }
    tail = head;
    head = head.next;
  }
  return newHead;
};
