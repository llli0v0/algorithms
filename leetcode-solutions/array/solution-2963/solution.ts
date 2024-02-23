function numberOfGoodPartitions(nums: number[]): number {
  let table = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (!table.has(n)) table.set(n, []);
    table.get(n)!.push(i);
  }
  let secs: [number, number][] = [];
  for (let arr of table.values()) {
    secs.push([arr[0], arr[arr.length - 1]]);
  }
  secs.sort((a, b) => a[0] - b[0]);
  let nsecs: [number, number][] = [secs[0]!];
  for (let i = 1; i < secs.length; i++) {
    let [a, b] = nsecs[nsecs.length - 1];
    let [c, d] = secs[i];
    if (c < b) {
      nsecs.pop();
      nsecs.push([a, Math.max(b, d)]);
    } else {
      nsecs.push([c, d]);
    }
  }
  let mod = 10 ** 9 + 7;
  let res = 1;
  for (let i = 0; i < nsecs.length - 1; i++) {
    res = res * 2 % mod;
  }
  return res;
};
