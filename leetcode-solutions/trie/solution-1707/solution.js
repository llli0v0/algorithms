/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function(nums, queries) {
  queries = queries.map((item, index) => item.concat([index]));
  queries.sort((a, b) => a[1] - b[1]);
  nums.sort((a, b) => a - b);
  let root = new Node();
  let i = 0;
  let res = new Array(queries.length).fill(-1);
  for (let query of queries) {
    let [x, m, idx] = query;
    while (nums[i] <= m) {
      root.insert(nums[i]);
      i++;
    }
    if (root._0 || root._1) {
      res[idx] = root.match(x);
    }
  }
  return res;
};

class Node {
  constructor(level = 30) {
    this._0 = null;
    this._1 = null;
    this.cnt0 = 0;
    this.cnt1 = 0;
    this.level = level;
  }

  insert(x) {
    let n = 1 << this.level;
    if (x & n) {
      this.cnt1++;
      if (this.level > 0) {
        if (!this._1) this._1 = new Node(this.level - 1);
        this._1.insert(x - n);
      }
    } else {
      this.cnt0++;
      if (this.level > 0) {
        if (!this._0) this._0 = new Node(this.level - 1);
        this._0.insert(x);
      }
    }
  }

  match(x) {
    let n = 1 << this.level;
    let res = 0;
    if (x & n) {
      if (this.cnt0) {
        res += n;
        if (this.level > 0) {
          res += this._0.match(x - n);
        }
      } else {
        if (this.level > 0) {
          res += this._1.match(x - n);
        }
      }
    } else {
      if (this.cnt1) {
        res += n;
        if (this.level > 0) {
          res += this._1.match(x);
        }
      } else {
        if (this.level > 0) {
          res += this._0.match(x);
        }
      }
    }
    return res;
  }
}
