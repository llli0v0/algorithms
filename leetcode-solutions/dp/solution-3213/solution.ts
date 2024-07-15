const mod = 10**9 + 7;

function getStrHash(str: string) {
  let m = 1;
  let n = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    n += (str.charCodeAt(i) - 96) * m;
    n %= mod;
    m *= 27;
    m %= mod;
  }
  return n;
}

function minimumCost(target: string, words: string[], costs: number[]): number {
  let lenSet: Set<number> = new Set();
  let hashMap: Map<number, number> = new Map();
  for (let i = 0; i < words.length; i++) {
    lenSet.add(words[i].length);
    let hash = getStrHash(words[i]);
    hashMap.set(hash, Math.min(hashMap.get(hash) ?? Infinity, costs[i]))
  }
  let lenArr: number[] = Array.from(lenSet).sort((a, b) => a - b);
  let dp: number[] = new Array(target.length).fill(Infinity);
  let m = 1;
  let n = 0;
  let mArr: bigint[] = [1n];
  let nArr: bigint[] = [];
  for (let i = 0; i < target.length; i++) {
    n *= 27;
    n += target.charCodeAt(i) - 96;
    n %= mod;
    m *= 27;
    m %= mod;
    mArr.push(BigInt(m));
    nArr.push(BigInt(n));
    for (let j = 0; j < lenArr.length; j++) {
      let len = lenArr[j];
      if (len > i + 1) break;
      if (i - len >= 0 && !isFinite(dp[i - len])) continue;
      if (i - len === -1) {
        if (hashMap.has(n)) {
          dp[i] = Math.min(dp[i], hashMap.get(n)!);
        }
      } else {
        let hash = (n + mod - Number(nArr[i - len] * mArr[len] % BigInt(mod))) % mod;
        if (hashMap.has(hash)) {
          dp[i] = Math.min(dp[i], hashMap.get(hash)! + dp[i - len]);
        }
      }
    }
  }
  if (isFinite(dp[dp.length - 1])) {
    return dp[dp.length - 1];
  }
  return -1;
};
