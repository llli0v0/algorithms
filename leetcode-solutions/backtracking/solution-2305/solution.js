/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  let result = Infinity;
  helper(0, new Array(k).fill(0));
  return result;
  
  function helper(index, arr) {
    if (index >= cookies.length) {
      return result = Math.min(result, Math.max(...arr));
    }
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr.slice(0);
      newArr[i] += cookies[index];
      if (newArr[i] > result) continue;
      helper(index + 1, newArr);
    }
  }
};
