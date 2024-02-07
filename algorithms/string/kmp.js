function kmp(s, p) {
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
  let res = [];
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
