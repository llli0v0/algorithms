# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def zigzagLevelOrder(self, root):
        if not root: return []
        result = [[root.val]]
        cur = -1
        nodes = [root]
        nxnodes = []
        while nodes:
            if cur == -1:
                node = nodes.pop()
                if node.right: nxnodes.append(node.right)
                if node.left: nxnodes.append(node.left)
            if cur == 1:
                node = nodes.pop()
                if node.left: nxnodes.append(node.left)
                if node.right: nxnodes.append(node.right)
            if not nodes and nxnodes:
                cur = -cur
                a = []
                for i in range(len(nxnodes)):
                    a.append(nxnodes[i].val)
                result.append(a)
                nodes = nxnodes[:]
                nxnodes = []
        return result


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

if __name__ == '__main__':
    tree = TreeNode(3)
    tree.left = TreeNode(9)
    tree.right = TreeNode(20)
    tree.right.left = TreeNode(5)
    tree.right.right = TreeNode(7)
    S = Solution()
    print(S.zigzagLevelOrder(tree))