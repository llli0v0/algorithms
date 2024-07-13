package solution0310

func findMinHeightTrees(n int, edges [][]int) (res []int) {
	if n == 1 {
		res = append(res, 0)
		return
	}

	widgetMap := make(map[int]map[int]int)
	oneMap := make(map[int]int)

	for _, edge := range edges {
		a, b := edge[0], edge[1]
		if widgetMap[a] == nil {
			widgetMap[a] = make(map[int]int)
		}
		widgetMap[a][b] = 1
		if widgetMap[b] == nil {
			widgetMap[b] = make(map[int]int)
		}
		widgetMap[b][a] = 1
		if len(widgetMap[a]) == 1 {
			oneMap[a] = b
		} else {
			delete(oneMap, a)
		}
		if len(widgetMap[b]) == 1 {
			oneMap[b] = a
		} else {
			delete(oneMap, b)
		}
	}

	nextOneMap := make(map[int]int)

	for len(widgetMap) > 2 {
		for k, v := range oneMap {
			delete(widgetMap[v], k)
			if len(widgetMap[v]) == 1 {
				for k1 := range widgetMap[v] {
					nextOneMap[v] = k1
				}
			}
			delete(widgetMap, k)
		}
		oneMap = nextOneMap
		nextOneMap = make(map[int]int)
	}

	for k := range widgetMap {
		res = append(res, k)
	}

	return
}
