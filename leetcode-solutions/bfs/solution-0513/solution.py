# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findBottomLeftValue(self, root):
        nodes = [root]
        nextn = []
        while nodes:
            if not nextn and (len(nodes) == 1) and not nodes[0].left and not nodes[0].right:
                return nodes[0].val
            node = nodes.pop()
            if node.right: nextn.insert(0, node.right)
            if node.left: nextn.insert(0, node.left)
            if not nodes:
                nodes = nextn[:]
                nextn = []