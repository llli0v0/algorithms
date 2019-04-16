class Solution:
    def __init__(self):
        self.graph = {}
        self.findWrong = False
    def equationsPossible(self, equations):
        verification = []
        for item in equations:
            if item[1] == '=':
                if not item[0] in self.graph:
                    self.graph[item[0]] = []
                if not item[3] in self.graph:
                    self.graph[item[3]] = []
                self.graph[item[0]].append(item[3])
                self.graph[item[3]].append(item[0])
            else:
                verification.append(item)

        if verification and not self.graph:
            return False
        if not verification:
            return True

        while verification and not self.findWrong:
            s = verification.pop()
            self.dfs(s[0], s[3])

        if self.findWrong:
            return False
        return True

    def dfs(self, start, end):
        visited = {}
        for item in self.graph:
            visited[item] = False
        if start == end:
            self.findWrong = True
            return
        if not start in self.graph:
            return
        self.dfsUtil(start, end, visited)

    def dfsUtil(self, start, end, visited):
        visited[start] = True
        for item in self.graph[start]:
            if item == end:
                self.findWrong = True
            if not visited[item]:
                self.dfsUtil(item, end, visited)


if __name__ == '__main__':
    s = Solution()
    print(s.equationsPossible(["e!=c","b!=b","b!=a","e==d"]))