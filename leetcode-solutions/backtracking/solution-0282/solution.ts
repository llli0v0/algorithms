function addOperators(num: string, target: number): string[] {
  let res: string[] = [];
  for (let i = 0, end = 1 << (num.length - 1); i < end; i++) {
    let nums: string[] = [];
    let x = 0;
    for (let j = 0; j < num.length; j++) {
      if (i & (1 << j)) {
        nums.push(num.slice(x, j + 1));
        x = j + 1;
      }
    }
    nums.push(num.slice(x));
    if (nums.every(item => item === '0' || item[0] !== '0')) {
      let arr: number[] = nums.map(item => parseInt(item));
      solve(arr, 1, [arr[0]]);
    }
  }
  return res;

  function solve(arr: number[], idx: number, e: (string | number)[]): void {
    if (idx === arr.length) {
      let cs = [...e];
      let i;
      while ((i = e.indexOf('*')) > -1) {
        let arr = e.splice(i - 1, 3);
        e.splice(i - 1, 0, (arr[0] as number) * (arr[2] as number));
      }
      while (e.length > 1) {
        let n;
        if (e[1] === '+') {
          n = (e[0] as number) + (e[2] as number);
        } else {
          n = (e[0] as number) - (e[2] as number);
        }
        e.splice(0, 3);
        e.unshift(n);
      }
      if (e[0] === target) res.push(cs.join(''));
      return;
    }
    let a = arr[idx];
    let b = idx + 1;
    solve(arr, b, [...e, '+', a]);
    solve(arr, b, [...e, '-', a]);
    solve(arr, b, [...e, '*', a]);
  }
};