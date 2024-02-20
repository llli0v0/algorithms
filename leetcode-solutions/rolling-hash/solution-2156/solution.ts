function subStrHash(s: string, power: number, modulo: number, k: number, hashValue: number): string {
  let mod: bigint = BigInt(modulo);
  let powe: bigint = BigInt(power);
  let hv: bigint = BigInt(hashValue);
  let h = 0n;
  let ed = s.length - k;
  let res: string;
  for (let i = s.length - 1; i >= ed; i--) {
    h = (h * powe + BigInt(s.charCodeAt(i) - 96)) % mod;
  }
  if (h === hv) res = s.slice(ed);
  let po = 1n;
  for (let i = 0; i < k - 1; i++) po = po * powe % mod;
  for (let i = ed - 1; i >= 0; i--) {
    h = ((h + mod - BigInt(s.charCodeAt(i + k) - 96) * po % mod) * powe + BigInt(s.charCodeAt(i) - 96)) % mod;
    if (h === hv) res = s.slice(i, i + k);
  }
  return res!;
};
