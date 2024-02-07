function rabinKarp(p, s) {
  let mod = 10n**20n + 7n;
  let pHash = 0n;
  for (let i = 0; i < p.length; i++) pHash = (pHash * 26n + BigInt(p.charCodeAt(i) - 97)) % mod;
  let n = 1n;
  let rollHash = 0n;
  for (let i = 0; i < p.length; i++) {
    n = (n * 26n) % mod;
    rollHash = (rollHash * 26n + BigInt(s.charCodeAt(i) - 97)) % mod;
  }
  for (let i = 1; i + p.length - 1 < s.length; i++) {
    rollHash = (rollHash * 26n + 26n * mod - BigInt(s.charCodeAt(i - 1) - 97) * n + BigInt(s.charCodeAt(i + p.length - 1) - 97)) % mod;
    if (rollHash === pHash) return true;
  }
  return false;
}