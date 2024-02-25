function maxPower(stations: number[], r: number, k: number): number {
  let presum: number[] = [0];
  for (let sta of stations) {
    presum.push(presum[presum.length - 1] + sta);
  }
  presum.shift();
  let vals: number[] = [];
  for (let i = 0; i < presum.length; i++) {
    let r_ = i + r >= presum.length ? presum[presum.length - 1] : presum[i + r];
    let l_ = i - r - 1 < 0 ? 0 : presum[i - r - 1];
    vals.push(r_ - l_);
  }
  let l_ = 0;
  let r_ = 10 ** 11;
  while (l_ < r_) {
    let m = Math.ceil((l_ + r_) / 2);
    let diff: number[] = new Array(vals.length).fill(0);
    let di = 0;
    let k_ = k;
    let ok = true;
    for (let i = 0; i < vals.length; i++) {
      di += diff[i];
      let v = vals[i] + di;
      if (v < m) {
        let ad = m - v;
        k_ -= ad;
        if (k_ < 0) {
          ok = false;
          break;
        }
        di += ad;
        diff[i] += ad;
        if (i + 2 * r + 1 < diff.length) {
          diff[i + 2 * r + 1] -= ad;
        }
      }
    }
    if (ok) {
      l_ = m;
    } else {
      r_ = m - 1;
    }
  }
  return l_;
};