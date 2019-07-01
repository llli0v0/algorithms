/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let n1, n2;
  if (nums1.length < nums2.length) {
    n1 = nums1;
    n2 = nums2;
  } else {
    n1 = nums2;
    n2 = nums1;
  }
  // l r 是针对 n1 取元素数量的范围
  let l = k - n2.length < 0 ? 0 : k - n2.length;
  let r = k - n1.length < 0 ? k : n1.length;
  let result = new Array(k).fill(0);
  for (let i = l; i <= r; i++) {
    let j = k - i;
    let a1 = helper(n1, i);
    let a2 = helper(n2, j);
    result = compare(result, helper2(a1, a2));
  }
  return result;

  function helper(n, c) {
    if (!c) return [];
    let a = Math.max(...n.slice(0, n.length - c + 1));
    let i = 0;
    for (; i < n.length; i++) {
      if (n[i] === a) break;
    }
    return [a].concat(helper(n.slice(i + 1), c - 1));
  }

  function helper2(a1, a2) {
    let r = [];
    while (a1.length && a2.length) {
      if (a1[0] !== a2[0]) {
        r.push(a1[0] > a2[0] ? a1.shift() : a2.shift());
      } else {
        r.push(compare2(a1, a2) ? a1.shift() : a2.shift());
      }
    }
    return r.concat(a1.length ? a1 : a2);
  }

  function compare(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] > a2[i]) return a1;
      if (a1[i] < a2[i]) return a2;
    }
    return a2;
  }

  function compare2(a1, a2) {
    let i = 1;
    while (a1.slice(0, i).join('') === a2.slice(0, i).join('') && i <= Math.max(a1.length, a2.length)) i++;
    return a1.slice(0, i).join('') > a2.slice(0, i).join('');
  }
};