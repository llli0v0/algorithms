function mostFrequentPrime(mat: number[][]): number {
  let mp = new Map<number, number>();
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      solve(i, j, 0, 1);
      solve(i, j, 0, -1);
      solve(i, j, 1, 0);
      solve(i, j, -1, 0);
      solve(i, j, 1, 1);
      solve(i, j, 1, -1);
      solve(i, j, -1, 1);
      solve(i, j, -1, -1);
    }
  }
  let res = -1;
  let max = 0;
  for (let [key, val] of mp) {
    let ok = true;
    for (let i = 2, end = Math.floor(Math.sqrt(key)); i <= end; i++) {
      if (key / i % 1 === 0) ok = false;
    }
    if (ok) {
      if (val > max) {
        res = key;
        max = val;
      } else if (val === max) {
        res = Math.max(res, key);
      }
    }
  }
  return res;

  function solve(x: number, y: number, a: number, b: number) {
    let s = String(mat[x][y]);
    x += a;
    y += b;
    while (mat[x] && mat[x][y]) {
      s += String(mat[x][y]);
      let n = parseInt(s);
      mp.set(n, (mp.get(n) ?? 0) + 1);
      x += a;
      y += b;
    }
  }
};