class Solution {
  int countSubmatrices(List<List<int>> grid, int k) {
    List<int> pre = List.filled(grid[0].length, 0);
    int res = 0;
    for (var i = 0; i < grid.length; i++) {
      int sum = 0;
      for (var j = 0; j < grid[i].length; j++) {
        sum += grid[i][j];
        if (sum + pre[j] <= k) res++;
        pre[j] += sum;
      }
    }
    return res;
  }
}
