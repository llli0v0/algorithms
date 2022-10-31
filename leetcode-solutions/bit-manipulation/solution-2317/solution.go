package solution2317

func maximumXOR(nums []int) (res int) {
    for _, v := range nums {
        res |= v
    }
    return
}
