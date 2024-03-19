class Solution {
  List<int> unmarkedSumArray(List<int> nums, List<List<int>> queries) {
    List<List<int>> nl = [];
    int sum = 0;
    for (var i = 0; i < nums.length; i++) {
      nl.add([nums[i], i]);
      sum += nums[i];
    }
    nl.sort((a, b) {
      if (a[0] != b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });
    List<int> res = [];
    Set<int> signed = {};
    int i = 0;
    for (var query in queries) {
      if (!signed.contains(query[0])) {
        sum -= nums[query[0]];
        signed.add(query[0]);
      }
      int k1 = 0;
      while (i < nl.length && k1 < query[1]) {
        List<int> item = nl[i];
        if (!signed.contains(item[1])) {
          signed.add(item[1]);
          sum -= nums[item[1]];
          k1++;
        }
        i++;
      }
      res.add(sum);
    }
    return res;
  }
}
