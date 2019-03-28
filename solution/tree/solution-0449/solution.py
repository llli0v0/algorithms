# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def __init__(self):
        self.instr = ''
        self.poststr = ''

    def serialize(self, root):
        """
        Encodes a tree to a single string.
        :type root: TreeNode
        :rtype: str
        """
        self.inorder(root)
        self.postorder(root)
        return self.instr[1:] + '|' + self.poststr[1:]

    def postorder(self, root):
        if not root: return
        self.postorder(root.left)
        self.postorder(root.right)
        self.poststr = self.poststr + ',' + str(root.val)
        
    def inorder(self, root):
        if not root: return
        self.inorder(root.left)
        self.instr = self.instr + ',' + str(root.val)
        self.inorder(root.right)

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

    def deserialize(self, data):
        """
        Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        if len(data) ==1: return None
        return self.buildTree(map(int, data.split('|')[0].split(',')), map(int, data.split('|')[1].split(',')))
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))