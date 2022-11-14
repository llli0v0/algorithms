/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
var splitMessage = function(message, limit) {
  let l = 0;
  let r = message.length;
  let res;
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let all = String(m);
    if (all.length * 2 + 3 >= limit) {
      r = m - 1;
      continue;
    }
    let index = 0;
    let arr = [];
    while (index < message.length) {
      let n = String(arr.length + 1);
      if (parseInt(n) > m) {
        l = m;
        break;
      }
      let tail = `<${n}/${all}>`;
      let s = message.slice(index, index + limit - tail.length);
      index += s.length;
      s += tail;
      arr.push(s);
      if (index >= message.length) {
        if (arr.length < m) {
          r = m - 1;
        } else {
          l = m;
          if (arr.length === m) res = arr;
        }
        break;
      }
    }
  }
  return res ?? [];
};
