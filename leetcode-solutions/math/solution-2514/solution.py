from collections import Counter
from math import comb

class Solution:
    def countAnagrams(self, s: str) -> int:
        mod = 10**9 + 7
        res = 1
        for w in s.split():
            counter = Counter(w)
            n = len(w)
            for k in counter.values():
                res *= comb(n, k)
                res %= mod
                n -= k
        return res
