# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def middleNode(self, head):
        count = 0
        p = head
        while p:
            count += 1
            p = p.next
        count = int(count / 2)
        while count:
            head = head.next
            count -= 1
        return head