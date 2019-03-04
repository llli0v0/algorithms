/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let cache = [];
  let current = head;
  let len = 0;
  while (current) {
    if (cache.length < n + 1) {
      cache.push(current);
    } else {
      cache.shift();
      cache.push(current);
    }
    current = current.next;
    len++;
  }
  if (len === n) {
    return cache[0].next;
  }
  if (n === 1) {
    cache[0].next = null;
  } else {
    cache[0].next = cache[2];
  }
  return head;
};