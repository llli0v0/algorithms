function SelectionSort(A) {
  for (let i = 0; i < A.length; i++) {
    let currentMin = A[i];
    let minIndex = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < currentMin) {
        currentMin = A[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) [A[minIndex], A[i]] = [A[i], A[minIndex]];
  }
  return A;
}
