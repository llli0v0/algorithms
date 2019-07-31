from typing import List

class Node:
    def __init__(self):
        self.belong = None

    def getBelong(self):
        if not self.belong:
            return self
        
        return self.belong.getBelong()

class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        S = {}

        for edge in edges:
            if not edge[0] in S:
                S[edge[0]] = Node()
            if not edge[1] in S:
                S[edge[1]] = Node()

            if S[edge[0]].getBelong() == S[edge[1]].getBelong():
                return edge
            
            S[edge[0]].getBelong().belong = S[edge[1]].getBelong()
