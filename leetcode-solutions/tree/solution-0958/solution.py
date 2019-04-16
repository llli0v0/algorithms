# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.deep = None
        self.result = True
        self.maxdeep = None

    def isCompleteTree(self, root):
        self.preorder(root, 0)
        return self.result
        
    def preorder(self, node, deep):
        if not node:
            if self.deep and deep > self.deep or self.maxdeep and self.maxdeep - deep > 1:
                self.result = False
            self.deep = deep
            if not self.maxdeep:
                self.maxdeep = deep
            return
        self.preorder(node.left, deep + 1)
        self.preorder(node.right, deep + 1)