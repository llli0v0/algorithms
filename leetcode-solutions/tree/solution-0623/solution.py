# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def addOneRow(self, root, v, d):
        if d == 1:
            tree = TreeNode(v)
            tree.left = root
            return tree
        else:
            nodes = [root]
            nxnodes = []
            while d - 2 and nodes:
                node = nodes.pop()
                if node.left: nxnodes.append(node.left)
                if node.right: nxnodes.append(node.right)
                if not nodes:
                    d -= 1
                    nodes = nxnodes[:]
                    nxnodes = []
            for i in range(len(nodes)):
                t = nodes[i].left
                nodes[i].left = TreeNode(v)
                nodes[i].left.left = t
                t = nodes[i].right
                nodes[i].right = TreeNode(v)
                nodes[i].right.right = t
            return root

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(4)
tree.left = TreeNode(2)
tree.left.left = TreeNode(3)
tree.left.right = TreeNode(1)

if __name__ == '__main__':
    S = Solution()
    S.addOneRow(tree, 1, 3)