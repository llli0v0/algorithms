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
var addTwoNumbers = function(l1, l2) {
  class ListNode{
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  let result = null;
  let currentl1Node = l1;
  let currentl2Node = l2;
  let currentResultNode = null;
  let needCarryBit = false;
  while (currentl1Node || currentl2Node || needCarryBit) {
    let sum;
    if (currentl1Node && currentl2Node) {
      if (needCarryBit) {
        sum = currentl1Node.val + currentl2Node.val + 1;
      } else {
        sum = currentl1Node.val + currentl2Node.val;
      } 
    } else if (currentl1Node || currentl2Node) {
      if (needCarryBit) {
        sum = (currentl1Node || currentl2Node).val + 1;
      } else {
        sum = (currentl1Node || currentl2Node).val;
      } 
    } else {
      sum = 1;
    }
    if (sum > 9) {
      sum = sum - 10;
      needCarryBit = true;
    } else {
      needCarryBit = false;
    }
    if (result === null) {
      result = new ListNode(sum);
      currentResultNode = result;
    } else {
      currentResultNode.next = new ListNode(sum);
      currentResultNode = currentResultNode.next;
    }
    currentl1Node && (currentl1Node = currentl1Node.next); 
    currentl2Node && (currentl2Node = currentl2Node.next);
  }
  return result;
};