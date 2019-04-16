# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root):
        if not root: return []
        result = [[root.val]]
        nodes = [root]
        nxnodes = []
        while nodes:
            nde = nodes.pop(0)
            if nde.left: nxnodes.append(nde.left)
            if nde.right: nxnodes.append(nde.right)
            if not nodes:
                r = []
                for i in range(len(nxnodes)):
                    r.append(nxnodes[i].val)
                if r: result.append(r)
                nodes = nxnodes[:]
                nxnodes = []
        return result