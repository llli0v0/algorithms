class Solution:
    def __init__(self):
        self.dp = {}

    def fib(self, N: int) -> int:
        if N in self.dp:
            return self.dp[N]
        if N == 0:
            return 0
        if N <= 2:
            return 1
        ans = self.fib(N - 1) + self.fib(N - 2)
        self.dp[N] = ans
        return self.dp[N]