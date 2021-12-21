/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
  let str = '1';
  let result = 0;
  while(n) {
    let num = parseInt(str, k);
    let s = String(num);
    let is = true;
    let len = Math.floor(s.length / 2);
    for (let i = 0; i < len; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        is = false;
        break;
      }
    }
    if (is) {
      n--;
      result += num;
    }
    str = next(str);
  }
  return result;

  function next(str) {
    let arr = str.split('').map(item => parseInt(item));
    if (arr.every(item => item === k - 1)) {
      arr = new Array(arr.length - 1).fill(0);
      arr.unshift(1);
      arr.push(1);
      return arr.join('');
    }
    if (arr.length % 2) {
      let mid = Math.floor(arr.length / 2);
      if (arr[mid] < k - 1) {
        arr[mid]++;
      } else {
        arr[mid] = 0;
        let l = mid - 1;
        let r = mid + 1;
        while (l >= 0) {
          if (arr[l] === k - 1) arr[l] = 0;
          else {
            arr[l]++;
            break;
          }
          l--;
        }
        while (r <= arr.length - 1) {
          if (arr[r] === k - 1) arr[r] = 0;
          else {
            arr[r]++;
            break;
          }
          r++;
        }
      }
      return arr.join('');
    } else {
      let l = arr.length / 2 - 1;
      let r = arr.length / 2;
      while (l >= 0) {
        if (arr[l] === k - 1) arr[l] = 0;
        else {
          arr[l]++;
          break;
        }
        l--;
      }
      while (r <= arr.length - 1) {
        if (arr[r] === k - 1) arr[r] = 0;
        else {
          arr[r]++;
          break;
        }
        r++;
      }
      return arr.join('');
    }
  }
};
