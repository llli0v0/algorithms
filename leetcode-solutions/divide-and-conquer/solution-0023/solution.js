/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  }
  class ListNode {
    constructor(value) {
      this.val = value;
      this.next = null;
    }
  }
  let target = lists;
  while (target.length > 1) {
    let times = Math.floor(target.length / 2);
    let currentProgress = 0;
    let res = [];
    while (currentProgress < times) {
      let linkList1 = target[currentProgress * 2];
      let linkList2 = target[currentProgress * 2 + 1];
      let newLinkList = null;
      let currentNewListTail = null;
      while (linkList1 !== null && linkList2 !== null) {
        if (linkList1.val > linkList2.val) {
          if (newLinkList === null) {
            newLinkList = new ListNode(linkList2.val);
            currentNewListTail = newLinkList;
          } else {
            currentNewListTail.next = new ListNode(linkList2.val);
            currentNewListTail = currentNewListTail.next;
          }
          linkList2 = linkList2.next;
        } else {
          if (newLinkList === null) {
            newLinkList = new ListNode(linkList1.val);
            currentNewListTail = newLinkList;
          } else {
            currentNewListTail.next = new ListNode(linkList1.val);
            currentNewListTail = currentNewListTail.next;
          }
          linkList1 = linkList1.next;
        }
      }
      if (linkList1 !== null) {
        if (currentNewListTail === null) {
          newLinkList = linkList1;
        } else {
          currentNewListTail.next = linkList1;
        }
      }
      if (linkList2 !== null) {
        if (currentNewListTail === null) {
          newLinkList = linkList2;
        } else {
          currentNewListTail.next = linkList2;
        }
      }
      res.push(newLinkList);
      currentProgress++;
    }
    if (target.length % 2) {
      res.push(target[target.length - 1]);
    }
    target = res;
  }
  return target[0];
};