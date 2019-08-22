# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.result = []

    def inorderTraversal(self, root):
        self.helper(root)
        return self.result

    def helper(self, node):
        if not node: return
        self.helper(node.left)
        self.result.append(node.val)
        self.helper(node.right)