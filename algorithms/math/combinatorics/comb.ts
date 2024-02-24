const dp = new Map<string, bigint>();

function comb(n: bigint, m: bigint): bigint {
  if (m === 0n || n === m) return 1n;
  let key = `${String(n)} ${String(m)}`;
  if (dp.has(key)) return dp.get(key)!;
  dp.set(key, comb(n - 1n, m - 1n) + comb(n - 1n, m));
  return dp.get(key)!;
}

export { comb };