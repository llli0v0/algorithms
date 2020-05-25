# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def __init__ (self):
        self.result = 0
        self.counter = [0] * 9
    def pseudoPalindromicPaths (self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.counter[root.val - 1] += 1
        self.traverse(root)
        return self.result
    def traverse (self, node):
        if not node.left and not node.right:
            f = True
            c = 0
            for i in range(len(self.counter)):
                if self.counter[i] % 2 == 1:
                    f = False
                    c += 1
            if c == 1:
                f = True
            if f:
                self.result += 1
        if node.left:
            self.counter[node.left.val - 1] += 1
            self.traverse(node.left)
            self.counter[node.left.val - 1] -= 1
        if node.right:
            self.counter[node.right.val - 1] += 1
            self.traverse(node.right)
            self.counter[node.right.val - 1] -= 1