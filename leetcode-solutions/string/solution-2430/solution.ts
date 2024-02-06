function deleteString(s: string): number {
  let dp = {};
  return helper(0);

  function helper(h: number): number {
    if (dp[h] !== undefined) return dp[h];
    dp[h] = 1;
    let z = new Array(s.length).fill(0);
    let l = h;
    let r = h;
    for (let i = h + 1; i < s.length; i++) {
      if (i > r) {
        l = r = i;
        while (r < s.length && s[r] === s[h + r - l]) {
          r++;
        }
        z[i] = r - l;
        r--;
      } else {
        if (r - i + 1 > z[i - l + h]) {
          z[i] = z[i - l + h];
        } else {
          l = i;
          while (r < s.length && s[r] === s[h + r - l]) {
            r++;
          }
          z[i] = r - l;
          r--;
        }
      }
      if (z[i] >= i - h) {
        dp[h] = Math.max(dp[h], helper(i) + 1);
      }
    }
    return dp[h];
  }
};
