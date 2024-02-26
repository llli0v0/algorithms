function longestValidSubstring(word: string, forbidden: string[]): number {
  let secs = new Map<number, number>();
  let forbs = new Set<number>();
  let mod = 10 ** 9 + 7;
  for (let s of forbidden) {
    let v = s.charCodeAt(0) - 96;
    for (let i = 1; i < s.length; i++) {
      v = (v * 27 + s.charCodeAt(i) - 96) % mod;
    }
    forbs.add(v);
  }
  for (let l = 1; l < 11; l++) {
    let v = word.charCodeAt(0) - 96;
    let k = 1;
    for (let i = 1; i < l; i++) {
      k *= 27;
      v = (v * 27 + word.charCodeAt(i) - 96) % mod;
    }
    if (forbs.has(v)) {
      secs.set(l - 1, Math.max(secs.get(l - 1) ?? 0, 0));
    }
    for (let i = l; i < word.length; i++) {
      v = (v + mod - ((word.charCodeAt(i - l) - 96) * k) % mod) % mod;
      v = (v * 27 + word.charCodeAt(i) - 96) % mod;
      if (forbs.has(v)) {
        secs.set(i, Math.max(secs.get(i) ?? 0, i - l + 1));
      }
    }
  }
  let p = 0;
  let res = 0;
  for (let i = 0; i < word.length; i++) {
    if (secs.has(i)) {
      res = Math.max(res, i - p);
      p = Math.max(p, secs.get(i)! + 1);
    }
  }
  res = Math.max(res, word.length - p);
  return res;
};