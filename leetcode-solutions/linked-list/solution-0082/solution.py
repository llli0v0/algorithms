# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

from collections import Counter

class Solution:
    def deleteDuplicates(self, head):
        if not head: return None
        count = Counter()
        cur = head
        while cur:
            count[cur.val] += 1
            cur = cur.next
        while head and count[head.val] > 1:
            temp = head.next
            head.next = None
            head = temp
        if not head: return None
        h = head
        while h.next:
            if count[h.next.val] > 1:
                h.next = h.next.next
            else:
                h = h.next
        return head