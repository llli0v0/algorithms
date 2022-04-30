/**
 * @param {number[][]} flowers
 * @param {number[]} persons
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, persons) {
  let all = [];
  for (let i = 0; i < flowers.length; i++) {
    all.push([flowers[i][0], 1]);
    all.push([flowers[i][1] + 1, -1]);
  }
  all.sort((a, b) => a[0] - b[0]);
  let arr = [ { count: all[0][1] === 1 ? 1 : 0, time: all[0][0] } ];
  for (let i = 1; i < all.length; i++) {
    if (arr[arr.length - 1].time === all[i][0]) {
      arr[arr.length - 1].count += all[i][1];
    } else {
      arr.push({ count: all[i][1] + arr[arr.length - 1].count, time: all[i][0] });
    }
  }
  let result = [];
  for (let i = 0; i < persons.length; i++) {
    let p = persons[i];
    if (p < arr[0].time) result.push(0);
    else if (p > arr[arr.length - 1].time) result.push(0);
    else {
      let l = 0;
      let r = arr.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m].time < p && p >= arr[m + 1].time) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      result.push(arr[l].count);
    }
  }
  return result;
};
