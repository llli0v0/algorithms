# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# better solution is flow fast point
class Solution:
    def isPalindrome(self, head):
        if not head or not head.next: return True
        left = head
        count = 1
        while head.next:
            count += 1
            head.next.pre = head
            head = head.next
        count = int(count / 2)
        while count:
            if left.val != head.val:
                return False
            left = left.next
            head = head.pre
            count -= 1
        return True

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

L = ListNode(1)
L.next = ListNode(1)
L.next.next = ListNode(2)
L.next.next.next = ListNode(1)

if __name__ == '__main__':
    S = Solution()
    S.isPalindrome(L)