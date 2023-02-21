/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
var handleQuery = function(nums1, nums2, queries) {
  let sum = nums2.reduce((pre, cur) => pre + cur);
  let segmentTree = new SegmentTree(nums1);
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let [t, a, b] = queries[i];
    if (t === 1) {
      segmentTree.lazyUpdate(a, b, 1, 0, nums1.length - 1);
    } else if (t === 2) {
      sum += segmentTree.tree[1] * a;
    } else {
      res.push(sum);
    }
  }
  return res;
};

class SegmentTree {
  constructor(nums) {
    this.tree = {};
    this.pending = {};
    this.nums = nums;
    this.build(1, 0, nums.length - 1);
  }

  build(idx, l, r) {
    this.pending[idx] = false;
    if (l === r) {
      return this.tree[idx] = this.nums[l];
    }
    let m = Math.floor((l + r) / 2);
    let v1 = this.build(idx * 2, l, m);
    let v2 = this.build(idx * 2 + 1, m + 1, r);
    return this.tree[idx] = v1 + v2;
  }

  lazyUpdate(l, r, idx, a, b) {
    if (this.pending[idx]) {
      this.tree[idx] = b - a + 1 - this.tree[idx];
      if (this.pending[idx * 2] !== undefined) {
        this.pending[idx * 2] = !this.pending[idx * 2];
        this.pending[idx * 2 + 1] = !this.pending[idx * 2 + 1];
      }
      this.pending[idx] = false;
    }
    if (b < l || a > r) return this.tree[idx];
    if (l <= a && b <= r) {
      this.tree[idx] = b - a + 1 - this.tree[idx];
      if (this.pending[idx * 2] !== undefined) {
        this.pending[idx * 2] = !this.pending[idx * 2];
        this.pending[idx * 2 + 1] = !this.pending[idx * 2 + 1];
      }
      return this.tree[idx];
    }
    if (a === b) return this.tree[idx];
    let m = Math.floor((a + b) / 2);
    return this.tree[idx] = this.lazyUpdate(l, r, idx * 2, a, m) + this.lazyUpdate(l, r, idx * 2 + 1, m + 1, b);
  }
}
