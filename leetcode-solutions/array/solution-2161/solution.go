package solution2161

func pivotArray(nums []int, pivot int) (res []int) {
    arr1 := []int{}
    arr2 := []int{}
    arr3 := []int{}
    for _, v := range nums {
        if v < pivot {
            arr1 = append(arr1, v)
        } else if v > pivot {
            arr2 = append(arr2, v)
        } else {
            arr3 = append(arr3, v)
        }
    }
    res = append(res, arr1...)
    res = append(res, arr3...)
    res = append(res, arr2...)
    return
}
