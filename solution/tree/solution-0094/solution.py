# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.result = []

    def inorderTraversal(self, root):
        self.inorder(root)
        return self.result

    def inorder(self, root):
        if not root: return
        self.inorder(root.left)
        self.result.append(root.val)
        self.inorder(root.right)

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(1)
tree.left = TreeNode(2)
tree.left.right = TreeNode(3)

if __name__ == '__main__':
    S = Solution()
    print(S.inorderTraversal(tree))