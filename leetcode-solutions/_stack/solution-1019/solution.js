/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  let result = [];
  let stack = [];
  let index = 0;
  while (head) {
    let val = head.val;
    while (stack.length && stack[stack.length - 1].val < val) {
      let e = stack.pop();
      result[e.index] = val;
    }
    stack.push({ val: val, index: index });
    index++;
    head = head.next;
  }
  for (let i = 0; i < stack.length; i++) {
    result[stack[i].index] = 0;
  }
  return result;
};