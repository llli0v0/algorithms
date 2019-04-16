import collections

class Solution:
    def distinctSubseqII(self, S: str) -> int:
        res, end = 0, collections.Counter()
        for c in S:
            m = res
            res = 2 * res + 1 - end[c]
            end[c] = m + 1
        return res % (10**9 + 7)