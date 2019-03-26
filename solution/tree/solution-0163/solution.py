# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class BSTIterator:

    def __init__(self, root):
        self.nodes = []
        self.inorder(root)
        self.point = 0

    def next(self):
        """
        @return the next smallest number
        """
        if self.hasNext():
            result = self.nodes[self.point]
            self.point += 1
            return result

    def hasNext(self):
        """
        @return whether we have a next smallest number
        """
        if self.point > len(self.nodes) - 1:
            return False
        return True
        
    def inorder(self, root):
        if not root: return
        self.inorder(root.left)
        self.nodes.append(root.val)
        self.inorder(root.right)

# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()