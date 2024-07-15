package solution3217

type ListNode struct {
	Val  int
	Next *ListNode
}

func modifiedList(nums []int, head *ListNode) (newHead *ListNode) {
	numsMap := make(map[int]bool)
	for _, v := range nums {
		numsMap[v] = true
	}
	for head != nil && numsMap[head.Val] {
		head = head.Next
	}
	newHead = head
	p := head
	for p != nil {
		if p.Next != nil && numsMap[p.Next.Val] {
			p.Next = p.Next.Next
		} else {
			p = p.Next
		}
	}
	return
}
