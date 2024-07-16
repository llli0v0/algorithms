package solution3093

import (
	"sort"
)

type Info struct {
	length int
	index  int
}

func stringIndices(wordsContainer []string, wordsQuery []string) (res []int) {
	const mod = 1_000_000_007
	containerMap := make(map[int][]Info)

	for index, str := range wordsContainer {
		n := 0
		info := Info{length: len(str), index: index}
		containerMap[0] = append(containerMap[0], info)
		for i := len(str) - 1; i >= 0; i-- {
			n *= 27
			n += int(str[i] - 'a' + 1)
			n %= mod
			containerMap[n] = append(containerMap[n], info)
		}
	}

	isSorted := make(map[int]bool)

	for _, word := range wordsQuery {
		n := 0
		for i := len(word) - 1; i >= 0; i-- {
			nn := n * 27
			nn += int(word[i] - 'a' + 1)
			nn %= mod
			if containerMap[nn] != nil {
				n = nn
			} else {
				break
			}
		}
		arr := containerMap[n]
		if !isSorted[n] {
			sort.Slice(arr, func(i, j int) bool {
				a := arr[i]
				b := arr[j]
				if a.length == b.length {
					return a.index < b.index
				}
				return a.length < b.length
			})
			isSorted[n] = true
		}
		res = append(res, arr[0].index)
	}
	return
}
