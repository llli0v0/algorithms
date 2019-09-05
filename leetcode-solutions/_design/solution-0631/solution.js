class Excel {
  /**
   * @param {number} H
   * @param {character} W
   */
  constructor(H, W) {
    this.matrix = new Array(H).fill(null).map(() => new Array(W.charCodeAt() - 64).fill(0));

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        this.matrix[i][j] = new Node(0);
      }
    }
  }

  /** 
   * @param {number} r 
   * @param {character} c 
   * @param {number} v
   * @return {void}
   */
  set(r, c, v, change = true) {
    c = c.charCodeAt() - 65;
    r = r - 1;

    let M = this.matrix;

    let oldVal = M[r][c].val;

    M[r][c].val = v;

    if (change) M[r][c].chargeVision += 1;

    for (let i = 0; i < M[r][c].charge.length; i++) {
      let a = M[r][c].charge[i];

      if (M[a[0]][a[1]].chargeVision === a[2]) {
        this.set(a[0] + 1, String.fromCharCode(a[1] + 65), M[a[0]][a[1]].val + v - oldVal, false);
      }
    }
  }

  /** 
   * @param {number} r 
   * @param {character} c
   * @return {number}
   */
  get(r, c) {
    c = c.charCodeAt() - 65;
    r = r - 1;

    return this.matrix[r][c].val;
  }

  /** 
   * @param {number} r 
   * @param {character} c 
   * @param {string[]} strs
   * @return {number}
   */
  sum(r, c, strs) {
    let C = c.charCodeAt() - 65;
    let R = r - 1;

    let M = this.matrix;

    M[R][C].chargeVision += 1;

    let result = 0;

    for (let i = 0; i < strs.length; i++) {
      let I = strs[i].indexOf(':');

      if (I > -1) {
        let lt = strs[i].slice(0, I);
        let a = lt[0].charCodeAt() - 65;
        let b = parseInt(lt.slice(1)) - 1;

        let rb = strs[i].slice(I + 1);
        let c = rb[0].charCodeAt() - 65;
        let d = parseInt(rb.slice(1)) - 1;

        for (let m = b; m <= d; m++) {
          for (let n = a; n <= c; n++) {
            result += M[m][n].val;

            M[m][n].charge.push([R, C, M[R][C].chargeVision]);
          }
        }
      } else {
        let a = strs[i][0].charCodeAt() - 65;
        let b = parseInt(strs[i].slice(1)) - 1;

        result += M[b][a].val;

        M[b][a].charge.push([R, C, M[R][C].chargeVision]);
      }
    }

    M[R][C].val = result;

    return result;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.chargeVision = 0;
    this.charge = [];
  }
}

/** 
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(H, W)
 * obj.set(r,c,v)
 * var param_2 = obj.get(r,c)
 * var param_3 = obj.sum(r,c,strs)
 */