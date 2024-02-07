function Z(s) {
  let z = new Array(s.length).fill(0);
  let l = 0;
  let r = 0;
  for (let i = 1; i < s.length; i++) {
    if (i > r) {
      l = r = i;
      while (r < s.length && s[r] === s[r - l]) {
        r++;
      }
      z[i] = r - l;
      r--;
    } else {
      if (r - i + 1 > z[i - l]) {
        z[i] = z[i - l];
      } else {
        l = i;
        while (r < s.length && s[r] === s[r - l]) {
          r++;
        }
        z[i] = r - l;
        r--;
      }
    }
  }
  return z;
}
