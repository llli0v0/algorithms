class Solution:
    def checkRecord(self, n: int) -> int:
        dp = [[1, 1, 1, 3], [3, 3, 2, 8], [8, 7, 4, 19], [19, 17, 7, 43]]

        if n < 5: return dp[n - 1][3]

        mod = 1000000007

        for _ in range(5, n + 1):
            a = []
            a.append(dp[3][3] % mod)
            a.append((dp[3][3] - (dp[3][1] - dp[2][0] - dp[2][2])) % mod)
            a.append((dp[3][2] * 2 - dp[0][2]) % mod)
            a.append((a[0] + a[1] + a[2]) % mod)
            dp.pop(0)
            dp.append(a)

        return dp[3][3]