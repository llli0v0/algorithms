/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return null;
  let length = 0;
  let tail = null;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }
  tail = current;
  length++;
  let times = Math.floor(length / 2);
  current = head;
  while (times) {
    let moveNode = current.next;
    tail.next = moveNode;
    current.next = current.next.next;
    current = current.next;
    moveNode.next = null;
    tail = tail.next;
    times--;
  }
  return head;
};