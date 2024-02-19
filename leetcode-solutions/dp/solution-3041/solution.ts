function maxSelectedElements(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let res = 0;
  let dp = new Map<string, number>();
  for (let n of nums) {
    let key1 = `${n} 0`;
    let key2 = `${n - 1} 1`
    let key3 = `${n - 1} 0`;
    let key4 = `${n - 2} 1`;
    let k1 = `${n} 1`;
    let k2 = `${n} 0`;
    dp.set(k1, Math.max(dp.get(k1) ?? 1, (dp.get(key1) ?? 0) + 1, (dp.get(key2) ?? 0) + 1));
    dp.set(k2, Math.max(dp.get(k2) ?? 1, (dp.get(key3) ?? 0) + 1, (dp.get(key4) ?? 0) + 1));
    res = Math.max(res, dp.get(k1)!, dp.get(k2)!);
  }
  return res;
};
