/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function(packages, boxes) {
  packages.sort((a, b) => a - b);
  let packagesSum = [BigInt(packages[0])];
  for (let i = 1; i < packages.length; i++) {
    packagesSum.push(packagesSum[packagesSum.length - 1] + BigInt(packages[i]));
  }
  let result = 10n**20n;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].sort((a, b) => a - b);
    let box = boxes[i];
    if (box[box.length - 1] < packages[packages.length - 1]) continue;
    let cur = -1;
    let sum = 0n;
    for (let j = 0; j < box.length; j++) {
      let l = 0;
      let r = packages.length - 1;
      while (l < r) {
        let m = Math.ceil((l + r) / 2);
        if (box[j] >= packages[m]) {
          l = m;
        } else r = m - 1;
      }
      if (l > cur && box[j] >= packages[l]) {
        sum += BigInt(box[j]) * BigInt(l - cur) - (packagesSum[l] - (packagesSum[cur] === undefined ? 0n : packagesSum[cur]));
        cur = l;
      }
    }
    result = result > sum ? sum : result;
  }
  return result === 10n**20n ? -1 : result % (10n**9n + 7n);
};
