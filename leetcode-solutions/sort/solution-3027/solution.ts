function numberOfPairs(points: number[][]): number {
  let res = 0;
  points.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  for (let i = 0; i < points.length; i++) {
    let [, y1] = points[i];
    let maxy2 = -Infinity;
    for (let j = i + 1; j < points.length; j++) {
      let [, y2] = points[j];
      if (y2 > maxy2 && y1 >= y2) {
        maxy2 = y2;
        res++;
      }
    }
  }
  return res;
};
