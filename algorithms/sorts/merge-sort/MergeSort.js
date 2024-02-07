function MergeSort(A) {
  if (A.length < 2) return A;
  let mid = Math.floor(A.length / 2);
  let left = MergeSort(A.slice(0, mid));
  let right = MergeSort(A.slice(mid));
  let result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return left.length ? result.concat(left) : result.concat(right);
}
