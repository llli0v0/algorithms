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
var deleteMiddle = function(head) {
  let map = { 0: head };
  let index = 0;
  let result = head;
  while (head.next) {
    head.next.next_ = head;
    map[index + 1] = head.next;
    head = head.next;
    index++;
  }
  if (index === 0) return null;
  let delIndex = Math.floor((index + 1) / 2);
  let delNode = map[delIndex];
  delNode.next_.next = delNode.next;
  if (delNode.next) delNode.next.next_ = delNode.next_;
  return result;
};