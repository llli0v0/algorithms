package solution3203

func getMinHeightRoot(edges [][]int) (rootCount int, h int) {
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
		h++
	}

	rootCount = len(widgetMap)

	return
}

func minimumDiameterAfterMerge(edges1 [][]int, edges2 [][]int) int {
	rootCount1, h1 := getMinHeightRoot(edges1)
	rootCount2, h2 := getMinHeightRoot(edges2)

	var d1, d2, d3 int
	if rootCount1 == 1 {
		d1 = h1 * 2
		d3 += h1
	} else if rootCount1 == 2 {
		d1 = h1*2 + 1
		d3 += h1 + 1
	}
	if rootCount2 == 1 {
		d2 = h2 * 2
		d3 += h2
	} else if rootCount2 == 2 {
		d2 = h2*2 + 1
		d3 += h2 + 1
	}
	d3++

	return max(d1, d2, d3)
}
