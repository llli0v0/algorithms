function countKSubsequencesWithMaxBeauty(s: string, k: number): number {
  let counter: number[] = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - 97]++;
  }
  if (counter.filter(item => item > 0).length < k) return 0;
  let cc = new Map<number, number>();
  for (let c of counter) {
    cc.set(c, (cc.get(c) ?? 0) + 1);
  }
  counter = counter.sort((a, b) => b - a).slice(0, k);
  let cc1 = new Map<number, number>();
  for (let c of counter) {
    cc1.set(c, (cc1.get(c) ?? 0) + 1);
  }
  let res = 1n;
  let mod = 10n**9n + 7n;
  let dp: (bigint | null)[][] = new Array(27).fill(null).map(() => new Array(27).fill(null));
  for (let [c, ct1] of cc1) {
    let ct = cc.get(c)!;
    res = res * comb(BigInt(ct), BigInt(ct1)) * (BigInt(c) ** BigInt(ct1)) % mod;
  }
  return Number(res);

  function comb(n: bigint, m: bigint): bigint {
    if (m === 0n || n === m) return 1n;
    let idxn = Number(n);
    let idxm = Number(m);
    if (dp[idxn][idxm]) return dp[idxn][idxm]!;
    return dp[idxn][idxm] = comb(n - 1n, m - 1n) + comb(n - 1n, m);
  }
};
