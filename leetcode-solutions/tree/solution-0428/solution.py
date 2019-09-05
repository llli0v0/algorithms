"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""
class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: Node
        :rtype: str
        """
        if not root: return ''

        result = str(root.val) + '['

        for i in range(len(root.children)):
            result += self.serialize(root.children[i]) + ' '

        result = result[0 : len(result) - 1]

        result += ']'
        
        return str(root.val) if not root.children else result

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: Node
        """
        if not data: return None

        i = 0

        while i < len(data) and data[i].isalnum(): i += 1

        return Node(int(data[0 : i]), self.helper(data[i + 1 : len(data) - 1]))
        

    def helper(self, data):
        i = 0

        result = []

        while i < len(data):
            if data[i] == ' ': i += 1

            l = i

            while i < len(data) and data[i].isalnum(): i += 1

            v = int(data[l : i])

            if i >= len(data) or data[i] == ' ':
                result.append(Node(v, []))
            elif data[i] == '[':
                i += 1
                m = i
                s = 1

                while s > 0:
                    if data[i] == '[': s += 1
                    elif data[i] == ']': s -= 1
                    i += 1

                c = self.helper(data[m : i - 1])
                result.append(Node(v, c))

        return result

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))