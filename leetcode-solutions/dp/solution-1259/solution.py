class Solution:
    def numberOfWays(self, num_people: int) -> int:
        dp = {}
        M = 10 ** 9 + 7

        def helper(N):
            if N == 2 or N == 0: return 1
            if N in dp: return dp[N]

            a = 0

            for i in range(2, N + 1):
                if (i - 2) % 2 == 0:
                    a += ((helper(i - 2) % M) * (helper(N - i) % M)) % M

            dp[N] = a
            return dp[N]

        return helper(num_people) % M