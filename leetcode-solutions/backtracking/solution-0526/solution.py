from typing import List

class Solution:
    def __init__(self):
        self.result = 0

    def countArrangement(self, N: int) -> int:
        a = [i + 1 for i in range(N)]
        for i in range(len(a)):
            b = a[:]
            b.pop(i)
            self.helper(b, 2)
        return self.result

    def helper(self, n: List[int], t: int):
        if not n: self.result += 1
        for i in range(len(n)):
            if n[i] % t and t % n[i]: continue
            b = n[:]
            b.pop(i)
            self.helper(b, t + 1)