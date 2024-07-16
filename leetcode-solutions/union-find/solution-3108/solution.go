package solution3108

type Node struct {
	parent *Node
	val    int
	rank   int
}

func (n *Node) getRoot() *Node {
	if n.parent == nil {
		return n
	}
	n.parent = n.parent.getRoot()
	return n.parent
}

func minimumCost(n int, edges [][]int, query [][]int) (res []int) {
	unionFind := make(map[int]*Node)
	for i := range n {
		unionFind[i] = &Node{parent: nil, val: (1 << 30) - 1, rank: 0}
	}
	for _, edge := range edges {
		a, b, w := edge[0], edge[1], edge[2]
		aRoot := unionFind[a].getRoot()
		bRoot := unionFind[b].getRoot()
		if aRoot != bRoot {
			if aRoot.rank < bRoot.rank {
				aRoot, bRoot = bRoot, aRoot
			}
			bRoot.parent = aRoot
			aRoot.val &= bRoot.val
			aRoot.rank++
		}
		aRoot.val &= w
	}
	for _, q := range query {
		a, b := q[0], q[1]
		if unionFind[a] == nil || unionFind[b] == nil {
			res = append(res, -1)
		} else {
			aRoot := unionFind[a].getRoot()
			bRoot := unionFind[b].getRoot()
			if aRoot != bRoot {
				res = append(res, -1)
			} else {
				res = append(res, aRoot.val)
			}
		}
	}
	return
}
