package solution3212

func numberOfSubmatrices(grid [][]byte) (res int) {
	m := len(grid)
	n := len(grid[0])
	matrix := make([][][2]int, m)
	for i := range matrix {
		matrix[i] = make([][2]int, n)
	}

	for i := range grid {
		x, y := 0, 0
		for j := range grid[i] {
			s := grid[i][j]
			if s == 'X' {
				x++
			} else if s == 'Y' {
				y++
			}
			if i > 0 {
				matrix[i][j] = [2]int{matrix[i-1][j][0] + x, matrix[i-1][j][1] + y}
			} else {
				matrix[i][j] = [2]int{x, y}
			}
			if matrix[i][j][0] > 0 && matrix[i][j][0] == matrix[i][j][1] {
				res++
			}
		}
	}
	return
}
