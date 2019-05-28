/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  let counter = {};
  for (let i = 0; i < barcodes.length; i++) {
    if (counter[barcodes[i]] === undefined) counter[barcodes[i]] = 0;
    counter[barcodes[i]] += 1;
  }
  let counterArr = [];
  for (let key in counter) {
    counterArr.push({ key: key, count: counter[key] });
  }
  counterArr = counterArr.sort((a, b) => b.count - a.count);
  let sorted = [];
  for (let i = 0; i < counterArr.length; i++) {
    while (counterArr[i].count) {
      sorted.push(counterArr[i].key);
      counterArr[i].count--;
    }
  }
  let result = new Array(barcodes.length).fill(null);
  let index = 0;
  let index1 = 0;
  while (index1 < result.length) {
    result[index1] = sorted[index];
    index++;
    index1 += 2;
  }
  let index2 = 1;
  while (index2 < result.length) {
    result[index2] = sorted[index];
    index++;
    index2 += 2;
  }
  return result;
};