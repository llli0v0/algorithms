function maximumSubarrayXor(nums: number[], queries: number[][]): number[] {
  let res = new Array(queries.length).fill(-1);
  let dp1 = new Array(nums.length).fill(null).map(() => new Array(nums.length).fill(-1));
  let dp2 = new Array(nums.length).fill(null).map(() => new Array(nums.length).fill(-1));
  for (let i = 0; i < queries.length; i++) {
    let [l, r] = queries[i];
    res[i] = helper2(l, r);
  }
  return res;

  function helper1(l: number, r: number): number {
    if (l === r) return nums[l];
    if (dp1[l][r] !== -1) return dp1[l][r];
    return dp1[l][r] = helper1(l, r - 1) ^ helper1(l + 1, r);
  }

  function helper2(l: number, r: number): number {
    if (l === r) return nums[l];
    if (dp2[l][r] !== -1) return dp2[l][r];
    return dp2[l][r] = Math.max(helper1(l, r), helper2(l, r - 1), helper2(l + 1, r));
  }
};