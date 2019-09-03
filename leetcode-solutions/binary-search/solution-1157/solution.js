class MajorityChecker {
  constructor(arr) {
    this.A = arr;
    this.M = {};

    for (let i = 0; i < arr.length; i++) {
      if (this.M[arr[i]] === undefined) this.M[arr[i]] = [];
      this.M[arr[i]].push(i);
    }
  }

  query(left, right, threshold) {
    for (let i = 0; i < 20; i++) {
      let a = this.A[Math.floor(Math.random() * (right - left + 1)) + left];
      let l = this.search(this.M[a], left, 1);
      let r = this.search(this.M[a], right, 0);

      if (r - l + 1 >= threshold) return a;
    }
    return -1;
  }

  search(A, target, isLeft) {
    let L = 0;
    let R = A.length - 1;

    while (L < R) {
      let M = Math.floor((L + R) / 2);

      if (A[M] >= target) {
        R = M;
      } else {
        L = M + 1;
      }
    }
    
    if (A[L] === target) return L;
    if (isLeft) {
      if (A[L] > target) return L;
      else return L + 1;
    } else {
      if (A[L] < target) return L;
      else return L - 1;
    }
  }
}

/** 
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */