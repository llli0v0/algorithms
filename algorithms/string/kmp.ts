function kmp(s: string, p: string): number[] {
  let next = [0];
  let j = 0;
  let i = 1;
  while (i < p.length) {
    if (p[i] === p[j]) {
      next.push(j + 1);
      j++;
      i++;
    } else {
      if (j === 0) {
        next.push(0);
        i++;
      } else {
        j = next[j - 1];
      }
    }
  }
  j = 0;
  i = 0;
  let res: number[] = [];
  while (i < s.length) {
    if (s[i] === p[j]) {
      if (j === p.length - 1) {
        j = next[j];
        res.push(j - p.length + 1);
      } else {
        j++;
      }
      i++;
    } else {
      if (j) j = next[j - 1];
      else i++;
    }
  }
  return res;
}
