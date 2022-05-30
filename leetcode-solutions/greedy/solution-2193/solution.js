/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function(s) {
  if (s.length < 3) return 0;
  let min = [undefined, undefined];
  for (let i = 97; i < 123; i++) {
    let e = String.fromCharCode(i);
    let l, r;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === e) {
        l = j;
        break;
      }
    }
    for (let j = s.length - 1; j >= 0; j--) {
      if (s[j] === e) {
        r = j;
        break;
      }
    }
    if (l !== r && l !== undefined && r !== undefined) {
      if (min[0] === undefined) {
        min = [l, r];
      } else if (min[0] + s.length - 1 - min[1] > l + s.length - 1 - r) {
        min = [l, r];
      }
    }
  }
  let [l, r] = min;
  return l + s.length - 1 - r + minMovesToMakePalindrome(s.slice(0, l) + s.slice(l + 1, r) + s.slice(r + 1));
};
