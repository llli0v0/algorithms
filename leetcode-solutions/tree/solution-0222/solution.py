# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def countNodes(self, root):
        return self.postorder(root)
        
    def postorder(self, root):
        if not root: return 0
        leftCount = self.postorder(root.left)
        rightCount = self.postorder(root.right)
        return leftCount + rightCount + 1