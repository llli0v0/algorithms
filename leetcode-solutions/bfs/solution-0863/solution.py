# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root, target, K):
        self.postorder(root)
        current = [target]
        nex = []
        aler = set([target.val])
        while K > 0 and current:
            cur = current.pop()
            if cur.left and not cur.left.val in aler:
                nex.append(cur.left)
                aler.add(cur.left.val)
            if cur.right and not cur.right.val in aler:
                nex.append(cur.right)
                aler.add(cur.right.val)
            if hasattr(cur, 'per') and not cur.per.val in aler:
                nex.append(cur.per)
                aler.add(cur.per.val)
            if not current:
                K -= 1
                current = nex
                nex = []
        for i in range(len(current)):
            current[i] = current[i].val
        return current

    def postorder(self, root):
        if root.left:
            root.left.per = root
            self.postorder(root.left)
        if root.right:
            root.right.per = root
            self.postorder(root.right)

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

tree = TreeNode(0)
tree.left = TreeNode(2)
tree.right = TreeNode(1)
tree.right.left = TreeNode(3)

if __name__ == '__main__':
    S = Solution()
    print(S.distanceK(tree, tree.right.left, 3))