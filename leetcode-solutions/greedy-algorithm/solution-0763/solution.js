/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let fid = new Set();
  let arr = [];
  for (let i = 0; i < S.length; i++) {
    if (fid.has(S[i])) continue;
    fid.add(S[i]);
    let lp = 0;
    for (let j = 0; j < S.length; j++) {
      if (S[j] === S[i]) {
        lp = j;
      }
    }
    arr.push([i, lp]);
  }
  let result = [];
  while (arr.length) {
    let m = arr.shift();
    let su = [];
    let mx = m[1];
    while (arr.length && arr[0][0] < mx) {
      let el = arr.shift();
      if (el[1] > mx) mx = el[1];
      su.push(el);
    }
    result.push(mx - m[0] + 1);
  }
  return result;
};

partitionLabels('ababcbacadefegdehijhklij');