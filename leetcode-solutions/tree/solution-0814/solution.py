# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pruneTree(self, root):
        val = self.postorder(root)
        if not val: return None
        return root
        
    def postorder(self, root):
        if not root: return 0
        leftVal = self.postorder(root.left)
        rightVal = self.postorder(root.right)
        if not leftVal: root.left = None
        if not rightVal: root.right = None
        return leftVal + rightVal + root.val