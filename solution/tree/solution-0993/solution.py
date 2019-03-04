# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isCousins(self, root, x, y):
        self.deep = 0
        self.xParent = None
        self.xDeep = None
        self.yParent = None
        self.yDeep = None
        def postOrder(root):
            if root == None:
                return
            self.deep += 1
            left = postOrder(root.left)
            right = postOrder(root.right)
            self.deep -= 1
            if left == x or right == x:
                self.xParent = root
                self.xDeep = self.deep
            if left == y or right == y:
                self.yParent = root
                self.yDeep = self.deep
            return root.val
        postOrder(root)
        if self.xDeep == self.yDeep and self.xParent != self.yParent:
            return True
        else:
            return False

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# tree = TreeNode(1)
# tree.left = TreeNode(2)
# tree.right = TreeNode(3)
# tree.left.left = TreeNode(4)

tree = TreeNode(1)
tree.left = TreeNode(2)
tree.right = TreeNode(3)
tree.right.right = TreeNode(4)
tree.right.right.left = TreeNode(5)

if __name__ == '__main__':
    s = Solution()
    print(s.isCousins(tree, 1, 2))