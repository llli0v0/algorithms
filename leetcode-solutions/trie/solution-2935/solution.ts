class TNode {
  left: null | TNode;
  right: null | TNode;
  lcnt: number;
  rcnt: number;
  level: number;
  constructor(level = 19) {
    this.left = null;
    this.right = null;
    this.lcnt = 0;
    this.rcnt = 0;
    this.level = level;
  }

  insert(num: number): void {
    if (num & (1 << this.level)) {
      this.rcnt++;
      if (this.level > 0) {
        if (!this.right) this.right = new TNode(this.level - 1);
        this.right.insert(num - (1 << this.level));
      }
    } else {
      this.lcnt++;
      if (this.level > 0) {
        if (!this.left) this.left = new TNode(this.level - 1);
        this.left.insert(num);
      }
    }
  }

  remove(num: number): void {
    if (num & (1 << this.level)) {
      if (!this.rcnt) return;
      this.rcnt--;
      if (this.rcnt) {
        if (this.level > 0) {
          this.right!.remove(num - (1 << this.level));
        }
      } else {
        this.right = null;
      }
    } else {
      if (!this.lcnt) return;
      this.lcnt--;
      if (this.lcnt) {
        if (this.level > 0) {
          this.left!.remove(num);
        }
      } else {
        this.left = null;
      }
    }
  }

  match(num: number): number {
    if (!this.lcnt && !this.rcnt) return 0;
    let res = 0;
    if (num & (1 << this.level)) {
      if (this.lcnt) {
        res += (1 << this.level);
        if (this.level > 0) {
          res += this.left!.match(num - (1 << this.level))!;
        }
      } else {
        if (this.level > 0 && this.right) {
          res += this.right.match(num - (1 << this.level))!;
        }
      }
    } else {
      if (this.rcnt) {
        res += (1 << this.level);
        if (this.level > 0) {
          res += this.right!.match(num)!;
        }
      } else {
        if (this.level > 0 && this.left) {
          res += this.left.match(num)!;
        }
      }
    }
    return res;
  }
}

function maximumStrongPairXor(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let root: TNode = new TNode();
  root.insert(nums[0]);
  let j = 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    let half = num / 2;
    while (nums[j] < half && j < i) {
      root.remove(nums[j]);
      j++;
    }
    res = Math.max(res, root.match(num));
    root.insert(num);
  }
  return res;
};
