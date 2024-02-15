function countMatchingSubarrays(nums: number[], pattern: number[]): number {
  let s = '';
  for (let i = 1; i < nums.length; i++) {
    s += nums[i] === nums[i - 1] ? '.' : (nums[i] > nums[i - 1] ? '+' : '-');
  }
  let p = '';
  for (let i = 0; i < pattern.length; i++) {
    p += pattern[i] === 0 ? '.' : (pattern[i] === 1 ? '+' : '-');
  }
  return kmp(s, p);

  function kmp(s: string, p: string): number {
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
    let res = 0;
    while (i < s.length) {
      if (s[i] === p[j]) {
        if (j === p.length - 1) {
          j = next[j];
          res++;
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
};
