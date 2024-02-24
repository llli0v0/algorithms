function maxSpending(values: number[][]): number {
  let d = 1;
  let res = 0;
  for (let i = 0, len = values.length * values[0].length; i < len; i++) {
    let arr: [number, number][] = [];
    for (let j = 0; j < values.length; j++) {
      if (values[j].length) {
        arr.push([values[j][values[j].length - 1], j]);
      }
    }
    arr.sort((a, b) => a[0] - b[0]);
    let val = values[arr[0][1]].pop()!;
    res += val * d;
    d++;
  }
  return res;
};