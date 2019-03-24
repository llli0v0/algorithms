# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeElements(self, head, val):
        result = head
        while head and head.next:
            if head.next.val == val:
                head.next = head.next.next
            else:
                head = head.next
        while result and result.val == val:
            result = result.next
        return result

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

L = ListNode(1)
L.next = ListNode(1)
L.next.next = ListNode(1)

if __name__ == '__main__':
    S = Solution()
    S.removeElements(L, 1)