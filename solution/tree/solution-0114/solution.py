# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def flatten(self, root):
        """
        Do not return anything, modify root in-place instead.
        """
        if not root: return
        while not root.left and root.right:
            root = root.right
        head = root
        stack = []
        while head and head.left:
            stack.append(head)
            head = head.left
        tail = head
        while tail.right:
            if tail.left: self.flatten(tail)
            tail = tail.right
        while stack:
            t = stack.pop()
            temp = t.right
            t.right = head
            tail.right = temp
            head = t
            if tail.left: self.flatten(tail)
            while tail.right:
                if tail.right.left: self.flatten(tail.right)
                tail = tail.right
            t.left = None

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(4)
tree.left = TreeNode(1)
tree.left.right = TreeNode(3)
tree.left.right.left = TreeNode(2)

if __name__ == '__main__':
    S = Solution()
    S.flatten(tree)