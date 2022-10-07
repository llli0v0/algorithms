package solution0220

import (
    "math"

    avl "github.com/emirpasic/gods/trees/avltree"
)

func containsNearbyAlmostDuplicate(nums []int, indexDiff int, valueDiff int) bool {
    tree := avl.NewWithIntComparator()

    find := func(v int) *avl.Node {
        cur := tree.Root
        for cur != nil && cur.Key != v {
            if v < cur.Key.(int) {
                cur = cur.Children[0]
            } else {
                cur = cur.Children[1]
            }
        }
        return cur
    }

    for i := 0; i < len(nums); i++ {
        if i > indexDiff {
            tree.Remove(nums[i-indexDiff-1])
        }
        v := nums[i]
        if find(v) != nil {
            return true
        }
        tree.Put(v, i)
        cur := find(v)
        pre := cur.Prev()
        next := cur.Next()
        if pre != nil && math.Abs(float64(pre.Key.(int)-cur.Key.(int))) <= float64(valueDiff) {
            return true
        }
        if next != nil && math.Abs(float64(next.Key.(int)-cur.Key.(int))) <= float64(valueDiff) {
            return true
        }
    }
    return false
}
