function incremovableSubarrayCount(nums: number[]): number {
  let a = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) a = i;
    else break;
  }
  if (a === nums.length - 1) {
    return (1 + nums.length) * nums.length / 2;
  }
  let b = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) b = i;
    else break;
  }
  let res = a + 1;
  for (let i = b; i < nums.length; i++) {
    if (nums[0] >= nums[i]) {
      res++;
    } else if (nums[i] > nums[a]) {
      res += a + 2;
    } else {
      let l = 0;
      let r = a;
      while (l < r) {
        let m = Math.ceil((l + r) / 2);
        if (nums[m] >= nums[i]) {
          r = m - 1;
        } else {
          l = m;
        }
      }
      res += l + 2;
    }
  }
  return res + 1;
};
