function MergeSort(A: number[]): number[] {
  if (A.length < 2) return A;
  let mid: number = Math.floor(A.length / 2);
  let left: number[] = MergeSort(A.slice(0, mid));
  let right: number[] = MergeSort(A.slice(mid));
  let result: number[] = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return left.length ? result.concat(left) : result.concat(right);
}