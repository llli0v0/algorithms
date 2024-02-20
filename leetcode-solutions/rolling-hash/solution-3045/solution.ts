function countPrefixSuffixPairs(words: string[]): number {
  let hash = new Map<number, number>();
  let mod = 10 ** 9 + 7;
  let hg = new Map<number, number>();
  hg.set(0, 1);
  for (let i = 1, mx = Math.max(...words.map(item => item.length)); i < mx; i++) {
    hg.set(i, hg.get(i - 1)! * 27 % mod);
  }
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let h = 0;
    let h1 = 0;
    for (let j = 0; j < word.length; j++) {
      let w = word.charCodeAt(j) - 96;
      let w1 = word.charCodeAt(word.length - 1 - j) - 96;
      h = (h * 27 + w) % mod;
      h1 = (h1 + hg.get(j)! * w1) % mod;
      if (h === h1 && hash.has(h)) {
        res += hash.get(h)!;
      }
    }
    hash.set(h, (hash.get(h) ?? 0) + 1);
  }
  return res;
};
