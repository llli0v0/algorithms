/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function(destination, k) {
  let computed = {};
  let result = '';
  let len = destination[0] + destination[1];
  let H = destination[1];
  let V = destination[0];
  while(result.length < len) {
    let hStartCount = 0;
    if (H > 0) hStartCount = Math.max(helper(H - 1, V), 1); 
    if (k <= hStartCount) {
      result += 'H';
      H--;
    } else {
      k -= hStartCount;
      result += 'V';
      V--;
    }
  }
  return result;
  
  function helper(H, V) {
    if (H < 0 || V < 0 || H === 0 && V === 0) return 0;
    else if (H === 0 || V === 0) return 1;
    let key = `${H} ${V}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = helper(H - 1, V) + helper(H, V - 1);
    return computed[key];
  }
};