/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {
  let l = 0;
  let r = removable.length;
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let sArr = s.split('');
    for (let i = 0; i < m; i++) {
      sArr[removable[i]] = '';
    }
    let ns = sArr.join('');
    let index = 0;
    for (let i = 0; i < ns.length; i++) {
      if (ns[i] === p[index]) index++;
    }
    if (index !== p.length) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  return l;
};