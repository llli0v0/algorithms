from typing import List

class Node:
    def __init__(self):
        self.belong = None

    def getBelong(self):
        if not self.belong:
            return self
        
        return self.belong.getBelong()

class Solution:
    def findRedundantDirectedConnection(self, edges: List[List[int]]) -> List[int]:
        N = {}
        T = []

        for i in edges:
            if not i[1] in N:
                N[i[1]] = []
            N[i[1]].append(i)
            if len(N[i[1]]) == 2:
                T = N[i[1]]
                break

        def helper(A, F):
            M = {}

            for a in A:
                if not a[0] in M:
                    M[a[0]] = Node()
                if not a[1] in M:
                    M[a[1]] = Node()
                if M[a[0]].getBelong() == M[a[1]].getBelong():
                    return False if not F else a
                M[a[0]].getBelong().belong = M[a[1]].getBelong()
            return True

        if T:
            res = []

            for i in T:
                a = edges.copy()
                for j in range(len(a)):
                    if i[0] == a[j][0] and i[1] == a[j][1]:
                        a.pop(j)
                        break
                res.append(helper(a, False))
            if (res[0] and res[1]):
                return T[1]
            elif (res[0]):
                return T[0]
            else:
                return T[1]
        else:
            return helper(edges, True)