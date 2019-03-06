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
var swapPairs = function(head) {
  var reverseKGroup = function(head, k) {
    if (head === null) return null;
    if (k === 1) return head;
    let node = head;
    let len = 1;
    while (node.next) {
      node.next.last = node;
      node = node.next;
      len++;
    }
    let allTimes = Math.floor(len / k);
    let swapNode = null;
    let linkNode = head;
    let swapNodeLeftNode = null;
    let linkNodeRightList = null;
    let currentTimes = k - 1;
    let headChanged = false;
    while (allTimes > 0) {
      if (headChanged) currentTimes++;
      while (currentTimes > 0) {
        linkNode = linkNode.next;
        if (!headChanged) head = linkNode;
        currentTimes--;
      }

      headChanged = true;
      swapNode = linkNode.last;
      currentTimes = k - 1;

      while (currentTimes > 0) {
        let nextSwap = swapNode.last;
        linkNodeRightList = linkNode.next;

        if (swapNode.last) {
          swapNodeLeftNode = swapNode.last;
        }
        if (swapNodeLeftNode) {
          swapNodeLeftNode.next = swapNode.next;
          swapNodeLeftNode.next.last = swapNodeLeftNode;
        }

        linkNode.next = swapNode;
        linkNode.next.last = linkNode;
        swapNode.next = linkNodeRightList;
        if (swapNode.next !== null) swapNode.next.last = swapNode;

        swapNode = nextSwap;
        linkNode = linkNode.next;
        swapNodeLeftNode = null;
        linkNodeRightList = null;
        currentTimes--;
      }
      currentTimes = k - 1;
      allTimes--;
    }
    return head;
  };
  return reverseKGroup(head, 2);
};