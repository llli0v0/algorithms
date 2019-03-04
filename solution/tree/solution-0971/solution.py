# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def flipMatchVoyage(self, root, voyage):
        """
        :type root: TreeNode
        :type voyage: List[int]
        :rtype: List[int]
        """
        self.point = 0
        result = []
        preOrderResult = []
        def preOrder(root):
            if root == None:
                return
            if root.left and root.left.val != voyage[self.point + 1]:
                result.append(root.val)
                preOrderResult.append(root.val)
                self.point += 1
                preOrder(root.right)
                preOrder(root.left)
            else:
                preOrderResult.append(root.val)
                self.point += 1
                preOrder(root.left)
                preOrder(root.right)
        preOrder(root)
        for i in range(len(voyage)):
            if preOrderResult[i] != voyage[i]:
                return [-1]
        return result

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(1)
tree.left = TreeNode(2)
tree.left.left = TreeNode(3)

if __name__ == '__main__':
    s = Solution()
    print(s.flipMatchVoyage(tree, [1, 2, 3]))