# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head):
        if not head: return None
        s = set([head.val])
        result = head
        while head.next:
            if not head.next.val in s:
                s.add(head.next.val)
                head = head.next
            else:
                head.next = head.next.next
        return result

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

L = ListNode(1)
L.next = ListNode(1)
L.next.next = ListNode(2)
L.next.next.next = ListNode(3)
L.next.next.next.next = ListNode(3)

if __name__ == '__main__':
    S = Solution()
    S.deleteDuplicates(L)