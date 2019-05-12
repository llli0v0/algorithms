class SegmentNode {
  constructor (start, end, minVal = Infinity) {
    this.start = start;
    this.end = end;
    this.minVal = minVal;
  }
}
/**
 * segment tree: like this
 *               0 - 5
 *              /     \
 *           0-2      3-5
 *          /   \    /   \
 *        0-1  2-2 3-4  5-5
 *       /  \     /  \
 *     0-0 1-1  3-3  4-4
 */
class SegmentTree {
  constructor (input) {
    this.inputArray = input;
    this.segmentArray = null;
    this.buildSegmentTree(input);
  }

  buildSegmentTree() {
    this.segmentArray = new Array(this.segmentArrayLength).fill({ minVal: Infinity });
    let root = new SegmentNode(0, this.inputArray.length - 1);
    this.segmentArray[0] = root;
    this.buildLeftRightNode(0, 0, this.inputArray.length - 1);
    root.minVal = Math.min(this.segmentArray[this.getLeftChildIndex(0)].minVal, this.segmentArray[this.getRightChildIndex(0)].minVal);
  }

  buildLeftRightNode(parentIndex, start, end) {
    if (start === end) return;
    let length = end - start + 1;
    let leftEnd = start + Math.ceil(length / 2) - 1;
    let rightStart = leftEnd + 1;

    let left = new SegmentNode(start, leftEnd);
    let leftIndex = this.getLeftChildIndex(parentIndex);
    this.segmentArray[leftIndex] = left;
    this.buildLeftRightNode(leftIndex, start, leftEnd);
    if (start !== leftEnd) {
      left.minVal = Math.min(this.segmentArray[this.getLeftChildIndex(leftIndex)].minVal, this.segmentArray[this.getRightChildIndex(leftIndex)].minVal);
    } else {
      left.minVal = this.inputArray[start];
    }

    let right = new SegmentNode(rightStart, end);
    let rightIndex = this.getRightChildIndex(parentIndex);
    this.segmentArray[rightIndex] = right;
    this.buildLeftRightNode(rightIndex, rightStart, end);
    if (rightStart !== end) {
      right.minVal = Math.min(this.segmentArray[this.getLeftChildIndex(rightIndex)].minVal, this.segmentArray[this.getRightChildIndex(rightIndex)].minVal);
    } else {
      right.minVal = this.inputArray[end];
    }
  }

  get segmentArrayLength() {
    if (Math.log2(this.inputArray.length) % 1 === 0) {
      return this.inputArray.length * 1 - 1;
    } else {
      return 2 ** Math.ceil(Math.log2(this.inputArray.length) + 1) - 1;
    }
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
}