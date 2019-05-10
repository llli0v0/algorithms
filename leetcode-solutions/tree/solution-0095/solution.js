class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function generateTrees(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let leftNodes = generateSubTrees(1, i - 1);
        let rightNodes = generateSubTrees(i + 1, n);
        for (let m = 0; m < leftNodes.length; m++) {
            for (let n = 0; n < rightNodes.length; n++) {
                let root = new TreeNode(i);
                root.left = leftNodes[m];
                root.right = rightNodes[n];
                result.push(root);
            }
        }
    }
    return result;
    function generateSubTrees(start, end) {
        let subTrees = [];
        if (start > end)
            return [null];
        for (let i = start; i <= end; i++) {
            let leftNodes = generateSubTrees(start, i - 1);
            let rightNodes = generateSubTrees(i + 1, end);
            for (let m = 0; m < leftNodes.length; m++) {
                for (let n = 0; n < rightNodes.length; n++) {
                    let root = new TreeNode(i);
                    root.left = leftNodes[m];
                    root.right = rightNodes[n];
                    subTrees.push(root);
                }
            }
        }
        return subTrees;
    }
}
;
