package solution2425

func xorAllNums(nums1 []int, nums2 []int) (res int) {
    if len(nums1)%2 == 1 {
        for _, v := range nums2 {
            res ^= v
        }
    }
    if len(nums2)%2 == 1 {
        for _, v := range nums1 {
            res ^= v
        }
    }
    return
}
