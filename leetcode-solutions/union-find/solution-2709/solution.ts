function canTraverseAllPairs(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let mp = new Map<number, UFNode>();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n < 2) return false; 
    let node = new UFNode(n);
    let isP = true;
    for (let j = 2, x = Math.floor(Math.sqrt(n)); j <= x; j++) {
      if (n % j === 0) {
        isP = false;
        deal(j, node);
        if (n / j !== j) deal(n / j, node);
      }
    }
    if (isP) deal(n, node);
  }
  return max === nums.length;

  function deal(n: number, node: UFNode) {
    if (mp.has(n)) {
      let rootm = mp.get(n)!.getRoot();
      let root = node.getRoot();
      if (root !== rootm) {
        root.parent = rootm;
        rootm.count += root.count;
      }
    }
    let root = node.getRoot();
    max = Math.max(max, root.count);
    mp.set(n, root);
  }
};

class UFNode {
  val: number;
  count: number;
  parent: UFNode | null;
  constructor(val: number) {
    this.val = val;
    this.count = 1;
    this.parent = null;
  }

  getRoot(): UFNode {
    if (this.parent === null) return this;
    return this.parent.getRoot();
  }
}
