function minimumTotalDistance(robot: number[], factory: number[][]): number {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);
  let limit: number[] = [factory[0][1]];
  for (let i = 1; i < factory.length; i++) {
    limit.push(limit[limit.length - 1] + factory[i][1]);
  }
  let dp = new Array(robot.length).fill(null).map(() => new Array(factory.length).fill(Infinity));
  return solve(robot.length - 1, factory.length - 1);

  function solve(i: number, j: number): number {
    if (i + 1 > limit[j]) return Infinity;
    if (i < 0) return 0;
    if (j < 0) return Infinity;
    if (isFinite(dp[i][j])) return dp[i][j];
    dp[i][j] = solve(i, j - 1);
    let sum = 0;
    for (let n = i; n >= 0; n--) {
      if (i - n + 1 > factory[j][1]) break;
      sum += Math.abs(robot[n] - factory[j][0]);
      dp[i][j] = Math.min(dp[i][j], sum + solve(n - 1, j - 1));
    }
    return dp[i][j];
  }
};