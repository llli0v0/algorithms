function QuickSort(A) {
    if (A.length < 2)
        return A;
    let mid = A.shift();
    let left = [];
    let right = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] < mid) {
            left.push(A[i]);
        }
        else {
            right.push(A[i]);
        }
    }
    return QuickSort(left).concat([mid].concat(QuickSort(right)));
}
