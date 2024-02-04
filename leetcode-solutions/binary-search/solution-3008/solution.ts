function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
  let aidx = kmp(s, a);
  let bidx = kmp(s, b);
  let res: number[] = [];
  if (!bidx.length) return res;
  for (let i = 0; i < aidx.length; i++) {
    let cur = aidx[i];
    let min = Math.max(0, cur - k);
    let max = Math.min(s.length - 1, cur + k);
    if (bidx[0] > max || bidx[bidx.length - 1] < min) continue;
    let l = 0;
    let r = bidx.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (bidx[m] >= min) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    let l1 = 0;
    let r1 = bidx.length - 1;
    while (l1 < r1) {
      let m = Math.ceil((l1 + r1) / 2);
      if (bidx[m] <= max) {
        l1 = m;
      } else {
        r1 = m - 1;
      }
    }
    if (l1 >= l) res.push(aidx[i]);
  }
  return res;

  function kmp(s: string, p: string): number[] {
    let next = [0];
    let j = 0;
    for (let i = 1; i < p.length; i++) {
      if (p[i] === p[j]) {
        next.push(next[next.length - 1] + 1);
        j++;
      } else {
        next.push(0);
        j = 0;
      }
    }
    j = 0;
    let i = 0;
    let res: number[] = [];
    while (i < s.length) {
      if (s[i] === p[j]) {
        j++;
        if (j === p.length) {
          res.push(i - p.length + 1);
          j = next[p.length - 1];
        }
        i++;
      } else {
        if (j === 0) i++;
        j = next[j - 1 > -1 ? j - 1 : 0];
      }
    }
    return res;
  }
};
