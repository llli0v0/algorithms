# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def smallestFromLeaf(self, root):
        return ''.join(map(self.numToWord, self.postOrder(root)))

    def postOrder(self, root):
        if root == None: return []
        left = self.postOrder(root.left)
        right = self.postOrder(root.right)
        if not len(left) or not len(right):
            _list = left or right
            _list.append(root.val)
            return _list
        if self.compare(left, right):
            left.append(root.val)
            return left
        else:
            right.append(root.val)
            return right

    def compare(self, left, right):
        minLen = len(left) if len(left) <= len(right) else len(right)
        for n in range(minLen):
            if left[n] < right[n]:
                return True
            elif left[n] > right[n]:
                return False
        if (len(left) > len(right)):
            return False

    def numToWord(self, num):
        return chr(num + 97)

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(23)
tree.left = TreeNode(25)
tree.right = TreeNode(12)
tree.left.left = TreeNode(22)
tree.left.right = TreeNode(6)
tree.right.left = TreeNode(20)
tree.right.right = TreeNode(14)
tree.left.left.left = TreeNode(0)

if __name__ == '__main__':
    s = Solution()
    print(s.smallestFromLeaf(tree))