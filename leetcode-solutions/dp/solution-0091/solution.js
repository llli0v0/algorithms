/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  s = s.split('');
  let ns = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      if (i === 0 || parseInt(ns[ns.length - 1]) > 2) return 0;
      ns.push(ns.pop() + '0');
    } else {
      ns.push(s[i]);
    }
  }
  let sub = {};
  sub[0] = 1;
  for (let i = 1; i < ns.length; i++) {
    sub[i] = 0;
    sub[i] += sub[i - 1];
    if (parseInt(ns[i - 1] + ns[i]) < 27) {
      sub[i] = sub[i] + (sub[i - 2] || 1);
    }
  }
  return sub[ns.length - 1];
};