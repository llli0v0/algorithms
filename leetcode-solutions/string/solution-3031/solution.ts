function minimumTimeToInitialState(word: string, k: number): number {
  let z: number[] = new Array(word.length).fill(0);
  let l = 0;
  let r = 0;
  for (let i = 1; i < word.length; i++) {
    if (i > r) {
      l = r = i;
      while (r < word.length && word[r] === word[r - l]) {
        r++;
      }
      z[i] = r - l;
      r--;
    } else {
      if (r - i + 1 > z[i - l]) {
        z[i] = z[i - l];
      } else {
        l = i;
        while (r < word.length && word[r] === word[r - l]) {
          r++;
        }
        z[i] = r - l;
        r--;
      }
    }
    if (z[i] === word.length - i && i % k === 0) return i / k;
  }
  return Math.ceil(word.length / k);
};
