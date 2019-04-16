# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, inorder, postorder):
        if not inorder: return
        for i in range(len(inorder)):
            if inorder[i] == postorder[-1]:
                index = i
                break
        inorderLeft = inorder[0 : index]
        inorderRight = inorder[index + 1 :]
        root = TreeNode(postorder[-1])
        if inorderLeft:
            root.left = TreeNode(0)
            self.build(root.left, inorderLeft, postorder[0 : len(inorderLeft)])
        if inorderRight:
            root.right = TreeNode(0)
            self.build(root.right, inorderRight, postorder[len(inorderLeft) : len(postorder) - 1])
        return root

    def build(self, node, inorder, postorder):
        for i in range(len(inorder)):
            if inorder[i] == postorder[-1]:
                index = i
                break
        inorderLeft = inorder[0 : index]
        inorderRight = inorder[index + 1 :]
        node.val = postorder[-1]
        if inorderLeft:
            node.left = TreeNode(0)
            self.build(node.left, inorderLeft, postorder[0 : len(inorderLeft)])
        if inorderRight:
            node.right = TreeNode(0)
            self.build(node.right, inorderRight, postorder[len(inorderLeft) : len(postorder) - 1])

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

if __name__ == '__main__':
    S = Solution()
    S.buildTree([9,3,15,20,7], [9,15,7,20,3])