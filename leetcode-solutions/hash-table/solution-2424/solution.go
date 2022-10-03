package solution2424

type LUPrefix struct {
    count    int
    videoMap map[int]Node
}

type Node struct {
    left  int
    right int
}

func Constructor(n int) LUPrefix {
    return LUPrefix{n, make(map[int]Node)}
}

func (this *LUPrefix) Upload(video int) {
    l, okl := this.videoMap[video-1]
    r, okr := this.videoMap[video+1]
    var nl, nr int
    if okl && okr {
        nl, nr = l.left, r.right
    } else if okl {
        nl, nr = l.left, video
    } else if okr {
        nl, nr = video, r.right
    } else {
        nl, nr = video, video
    }
    node := Node{nl, nr}
    this.videoMap[nl], this.videoMap[nr] = node, node
}

func (this *LUPrefix) Longest() (res int) {
    if v, ok := this.videoMap[1]; ok {
        res = v.right - v.left + 1
    }
    return
}
