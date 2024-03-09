import 'dart:math';

class Solution {
  int minimumOperationsToWriteY(List<List<int>> grid) {
    int idx = (grid.length / 2).floor();
    List<int> y = [0, 0, 0];
    List<int> other = [0, 0, 0];
    Set<String> st = {};
    st.add('$idx $idx');
    for (int i = idx - 1; i >= 0; i--) {
      st.add('$i $i');
    }
    for (int i = idx + 1; i < grid.length; i++) {
      st.add('${grid.length - 1 - i} $i');
      st.add('$i $idx');
    }
    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[i].length; j++) {
        int item = grid[i][j];
        if (st.contains('$i $j')) {
          y[item]++;
        } else {
          other[item]++;
        }
      }
    }
    return [
      y[1] + y[2] + other[0] + other[2],
      y[1] + y[2] + other[0] + other[1],
      y[0] + y[2] + other[0] + other[1],
      y[0] + y[2] + other[1] + other[2],
      y[0] + y[1] + other[0] + other[2],
      y[0] + y[1] + other[1] + other[2]
    ].reduce(min);
  }
}
