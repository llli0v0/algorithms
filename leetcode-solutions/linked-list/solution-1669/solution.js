/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let list2Head = list2;
  let cur = list2;
  while (cur.next) cur = cur.next;
  let list2Tail = cur;
  let aNode = null;
  let bNode = null;
  let index = 0;
  cur = list1;
  while (cur.next) {
    if (index === a) aNode = cur;
    if (index === b) bNode = cur;
    if (cur.next) cur.next.pre = cur;
    cur = cur.next;
    index++;
  }
  aNode.pre.next = list2Head;
  list2Tail.next = bNode.next;
  return list1;
};