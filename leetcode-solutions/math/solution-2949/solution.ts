function beautifulSubstrings(s: string, k: number): number {
  let len = 1;
  while (len ** 2 % (4 * k) > 0) len++;
  let st = new Set(['a', 'e', 'i', 'o', 'u']);
  let cnt = 0;
  let mp = new Map<string, number>([['0 0', 1]]);
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (st.has(s[i])) {
      cnt++;
    } else {
      cnt--;
    }
    let key = `${(i + 1) % len} ${cnt}`;
    res += mp.get(key) ?? 0;
    mp.set(key, (mp.get(key) ?? 0) + 1);
  }
  return res;
};
