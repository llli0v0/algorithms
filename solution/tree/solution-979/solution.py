# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.result = 0

    def distributeCoins(self, root):
        self.postOrder(root)
        return self.result

    def postOrder(self, root):
        if root == None:
            return 0
        leftS = self.postOrder(root.left)
        rightS = self.postOrder(root.right)
        self.result += abs(leftS) + abs(rightS)
        if root.val == 1:
            return leftS + rightS
        elif root.val == 0:
            return leftS + rightS - 1
        else:
            return leftS + rightS + root.val - 1

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(3)
tree.left = TreeNode(0)
tree.right = TreeNode(0)

if __name__ == '__main__':
    s = Solution()
    print(s.distributeCoins(tree))