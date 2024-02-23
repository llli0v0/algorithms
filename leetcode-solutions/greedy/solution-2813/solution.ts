function findMaximumElegance(items: number[][], k: number): number {
  items.sort((a, b) => b[0] - a[0]);
  let kd = new Set<number>();
  let canDel: number[][] = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    let [a, b] = items[i];
    sum += a;
    if (kd.has(b)) {
      canDel.push(items[i]);
    } else {
      kd.add(b);
    }
  }
  let res = sum + kd.size ** 2;
  for (let i = k; i < items.length; i++) {
    if (!canDel.length) break;
    let [a, b] = items[i];
    if (kd.has(b)) continue;
    kd.add(b);
    let del = canDel.pop()!;
    sum -= del[0];
    sum += a;
    res = Math.max(res, sum + kd.size ** 2);
  }
  return res;
};
