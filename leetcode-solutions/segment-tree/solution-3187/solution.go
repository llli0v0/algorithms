package solution3187

type Node struct {
	left  int
	right int
	val   int
}

type SegmentTree struct {
	tree      []*Node
	leafIndex map[int]int
}

func NewSegmentTree(arr *[]int) *SegmentTree {
	tree := make([]*Node, len(*arr)*4)
	leafIndex := make(map[int]int)
	st := &SegmentTree{tree: tree, leafIndex: leafIndex}
	st.build(0, 0, len(*arr)-1, arr)
	return st
}

func (T *SegmentTree) build(index, l, r int, arr *[]int) *Node {
	if l == r {
		T.tree[index] = &Node{left: l, right: r, val: (*arr)[l]}
		T.leafIndex[l] = index
		return T.tree[index]
	}
	m := (l + r) / 2
	left := T.build(index*2+1, l, m, arr)
	right := T.build(index*2+2, m+1, r, arr)
	T.tree[index] = &Node{left: l, right: r, val: left.val + right.val}
	return T.tree[index]
}

func (T *SegmentTree) query(index, l, r int) int {
	node := T.tree[index]
	if l == node.left && r == node.right {
		return node.val
	}
	m := (node.left + node.right) / 2
	if r <= m {
		return T.query(index*2+1, l, r)
	} else if l > m {
		return T.query(index*2+2, l, r)
	} else {
		return T.query(index*2+1, l, m) + T.query(index*2+2, m+1, r)
	}
}

func (T *SegmentTree) update(index, val int) {
	treeIndex := T.leafIndex[index]
	n := val - T.tree[treeIndex].val
	T.tree[treeIndex].val = val
	treeIndex = (treeIndex - 1) / 2
	for treeIndex >= 0 {
		T.tree[treeIndex].val += n
		if treeIndex == 0 {
			break
		}
		treeIndex = (treeIndex - 1) / 2
	}
}

func countOfPeaks(nums []int, queries [][]int) (res []int) {
	arr := make([]int, len(nums))
	arr[0] = 0
	arr[len(arr)-1] = 0
	for i := 1; i < len(arr)-1; i++ {
		if nums[i] > nums[i-1] && nums[i] > nums[i+1] {
			arr[i] = 1
		}
	}
	st := NewSegmentTree(&arr)
	for _, query := range queries {
		if query[0] == 1 {
			if query[2]-query[1] < 2 {
				res = append(res, 0)
			} else {
				res = append(res, st.query(0, query[1]+1, query[2]-1))
			}
		} else {
			index := query[1]
			nums[index] = query[2]
			for i := max(0, index-1); i <= min(len(arr)-1, index+1); i++ {
				if i-1 < 0 {
					continue
				} else if i+1 >= len(arr) {
					continue
				} else if nums[i] > nums[i-1] && nums[i] > nums[i+1] {
					if arr[i] == 0 {
						arr[i] = 1
						st.update(i, 1)
					}
				} else if nums[i] <= nums[i-1] || nums[i] <= nums[i+1] {
					if arr[i] == 1 {
						arr[i] = 0
						st.update(i, 0)
					}
				}
			}
		}
	}
	return
}
