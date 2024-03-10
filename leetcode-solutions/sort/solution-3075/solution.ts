function maximumHappinessSum(happiness: number[], k: number): number {
  let d = 0;
  let res = 0;
  happiness.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    res += Math.max(0, happiness[i] - d);
    d++;
  }
  return res;
};