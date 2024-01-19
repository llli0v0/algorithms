function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
  const bMatch: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + b.length) === b) {
      bMatch.push(i);
    }
  }
  const res: number[] = [];
  if (!bMatch.length) return res;
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + a.length) === a) {
      let min: number = Math.max(0, i - k);
      let max: number = Math.min(s.length - b.length, i + k);
      if (min > bMatch[bMatch.length - 1] || max < bMatch[0]) continue;
      let l = 0;
      let r = bMatch.length - 1;
      let lIdx: number, rIdx: number;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (bMatch[m] < min) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      lIdx = l;
      l = 0;
      r = bMatch.length - 1;
      while (l < r) {
        let m = Math.ceil((l + r) / 2);
        if (bMatch[m] > max) {
          r = m - 1;
        } else {
          l = m;
        }
      }
      rIdx = l;
      if (rIdx >= lIdx) res.push(i);
    }
  }
  return res;
};
