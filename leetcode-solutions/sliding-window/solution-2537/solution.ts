interface STR_NUM_MAP {
  [key: number]: number
}

export function countGood(nums: number[], k: number): number {
  const counter: STR_NUM_MAP = {};
  let res: number = 0;
  let l: number = 0;
  let pair: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    let n: number = nums[i];
    counter[n] = (counter[n] ?? 0) + 1;
    pair += counter[n] - 1;
    while (pair >= k) {
      let left: number = nums[l];
      counter[left]--;
      pair -= counter[left];
      l++;
    }
    res += l;
  }
  return res;
};
