# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        result = None
        headC = headA
        while headA:
            headA.color = 'red'
            headA = headA.next
        while headB:
            if hasattr(headB, 'color'):
                result = headB
                break
            headB = headB.next
        while headC:
            del(headC.color)
            headC = headC.next
        return result