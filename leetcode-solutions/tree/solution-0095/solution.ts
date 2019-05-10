class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function generateTrees(n: number): TreeNode[] {
  let result = [];
  for (let i: number = 1; i <= n; i++) {
    let leftNodes = generateSubTrees(1, i - 1);
    let rightNodes = generateSubTrees(i + 1, n);
    for (let m: number = 0; m < leftNodes.length; m++) {
      for (let n: number = 0; n < rightNodes.length; n++) {
        let root = new TreeNode(i);
        root.left = leftNodes[m];
        root.right = rightNodes[n];
        result.push(root);
      }
    }
  }
  return result;
  function generateSubTrees(start: number, end: number): TreeNode[] {
    let subTrees = [];
    if (start > end) return [null];
    for (let i: number = start; i <= end; i++) {
      let leftNodes = generateSubTrees(start, i - 1);
      let rightNodes = generateSubTrees(i + 1, end);
      for (let m: number = 0; m < leftNodes.length; m++) {
        for (let n: number = 0; n < rightNodes.length; n++) {
          let root = new TreeNode(i);
          root.left = leftNodes[m];
          root.right = rightNodes[n];
          subTrees.push(root);
        }
      }
    }
    return subTrees;
  }
};