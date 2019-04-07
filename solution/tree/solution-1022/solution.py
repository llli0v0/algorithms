# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.result = 0

    def sumRootToLeaf(self, root):
        self.go(root, '')
        return self.result % (pow(10, 9) + 7)

    def go(self, node, s):
        if not node.left and not node.right:
            self.result += int(s + str(node.val), 2)
        if node.left:
            self.go(node.left, s + str(node.val))
        if node.right:
            self.go(node.right, s + str(node.val))