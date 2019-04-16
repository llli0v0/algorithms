# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.result = []

    def preorderTraversal(self, root):
        self.preorder(root)
        return self.result
        
    def preorder(self, root):
        if not root: return
        self.result.append(root.val)
        self.preorder(root.left)
        self.preorder(root.right)