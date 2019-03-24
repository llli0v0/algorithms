# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head):
        if not head: return
        tail = head
        while tail.next:
            tail = tail.next
        while head != tail:
            temp = head
            head = head.next
            temp.next = tail.next
            tail.next = temp
        return head