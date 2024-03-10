function minimumBoxes(apple: number[], capacity: number[]): number {
  let sum = apple.reduce((a, b) => a + b);
  capacity.sort((a, b) => b - a);
  let s = 0;
  let res = 0;
  for (let i = 0; i < capacity.length; i++) {
    s += capacity[i];
    res++;
    if (s >= sum) break;
  }
  return res;
};